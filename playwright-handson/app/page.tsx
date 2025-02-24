import type { Metadata } from "next"

export const metadata: Metadata = {
  title: '最初のページ',
  description: 'Playwright ハンズオン最初のステップ',
}

export default function Home() {
  return (
    <main>
      <h1>Playwrightのハンズオン</h1>
      <p>あなたは1週間後にはPlaywrightエキスパートです</p>
      <p><button>操作ボタン</button></p>
    </main>
  )
}
