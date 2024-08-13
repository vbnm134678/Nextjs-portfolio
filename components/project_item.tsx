import Link from "next/link"
import Image from "next/image"

export default function ProjcetItem({ data }: { data: any }) {

  const projectData = {
    title: data.properties.Name.title[0].plain_text,
    githubLink: data.properties.Github.url,
    notionLink: data.url,
    role: data.properties.Role.rich_text[0].plain_text,
    description: data.properties.description.rich_text[0].plain_text,
    img_url: data.cover.file.url,
    tags: data.properties.Tag.multi_select,
    startDate: data.properties.Date.date.start,
    endDate: data.properties.Date.date.end,
  };

  return (
    <section className="project-card">
      <div className="h-2/4">
        <Image
          className="rounded-t-xl"
          src={projectData.img_url}
          alt="notion img"
          style={{
            width: '100%',
            height: '100%',
            objectFit: "cover"
          }}
          width={500}
          height={500}
          quality={100}
          priority={true}
        // layout="responsive"
        />
      </div>
      <div className="p-4 flex flex-col w-full overflow-auto">
        <h1 className="text-2xl font-bold">{projectData.title}</h1>
        <div><h1 className="font-bold">맡은 역할</h1><p>{projectData.role}</p></div>
        <h1 className="mt-4 text-xl">{projectData.description}</h1>
        <Link href={projectData.githubLink} className="text-gray-400 hover:text-slate-700">Github</Link>
        <Link href={projectData.notionLink} className="text-gray-400 hover:text-slate-700">Notion</Link>
        <div className="grid grid-cols-2 items-start mt-2 gap-2">{projectData.tags.map((tag: any) => (
          <h1 className="px-2 py-1 mr-2 rounded-md w-30 bg-sky-200 dark:bg-sky-700" key={tag.id}>{tag.name}</h1>
        ))}</div>
        <div>{projectData.startDate} ~ {projectData.endDate}</div>
      </div>
    </section>
  )
}