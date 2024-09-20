import Animation from "@/components/animation"
import Link from "next/link"

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="hidden lg:inline-block title-font sm:text-3xl mb-4 font-medium text-gray-900">
          FrontEnd Developer<br></br>이승규입니다
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          <li>새로운 기술을 찾고 관련 내용을 탐구하는 것을 좋아 합니다.</li>
          <li>팀 프로젝트를 통해 FrontEnd와 BackEnd의 기술을 이해하고 같이 협업 할 수 있습니다.</li>
          <li>가장 많이 다루는 언어는 Javascript 이고 사용하는 프레임 워크는 React 입니다.</li>
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg dark:bg-indigo-600 dark:hover:bg-indigo-500">Go to projects</button>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  )
}