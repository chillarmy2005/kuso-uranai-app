'use client';

import { useState } from 'react';

// 占いデータの定義
const fortunes = ['大吉', '吉', '中吉', '小吉', '末吉', '凶', '大凶', 'うんこ'];
const colors = ['赤', '青', '黄', '緑', '紫', 'オレンジ', 'ピンク', '黒', '白', '金', '銀', '透明'];
const items = ['石ころ', '枯れ葉', '折れた傘', '空き缶', '猫のひげ', 'カラスの羽', '使い古しの電池', 'そこらへんに転がってる石'];
const messages = [
  'ワシの占い、当たるも八卦、当たらぬも八卦じゃ...フォッフォッフォ...',
  'おぬしの未来、ワシにはお見通しじゃ...',
  'ふむ...おぬしのオーラは...なかなか興味深い色をしておるわい...',
  '今日の運勢を占ってやろう。まあ、気休め程度に聞いておくがよい...',
  '天の啓示が降りてきたわい！',
  '占いの結果に一喜一憂するでないぞ。大事なのは心持ちじゃ。',
  'ほう…そんなものが出たか。面白い。',
];
// 新しい占いデータを追加
const workLucks = ['大きな契約が取れるかも', '上司に褒められる', '単純作業でミスをする', '同僚とラーメンを食べに行くと吉', '新しいアイデアが閃くが、実行はまだ早い'];
const loveLucks = ['素敵な出会いがある...かもしれん', 'パートナーとの絆が深まる...気がする', '失恋の予感...知らんけど', 'ライバル出現！...気のせいか', 'デートに誘われる...かもしれん'];
const moneyLucks = ['臨時収入がありそうじゃ', '宝くじが当たる...と良いのう', '無駄遣いに注意せんとな', '投資が成功する...かもしれん', '財布を落とす...かもしれんから気をつけなされ'];


// インチキ占い師のアスキーアート
const fortuneTellerArt = `
　　　　　　　　　　　　　　,. -- ､
　　　　　　　　　　　　　, '　　　 ',
　　　　　　　　　　　　 /　　　　　 ヽ
　　　　　　　　　　　 /　, -- ､　　　ヽ
　　　　　　　　　　　 |　|　　　|　　　 |
　　　　　　　　　　　 |　|　　　|　　　 |
　　　　　　　　　　　 ヽ|　　　|ﾉ　　 /
　　　　　　　　　　　　 ヽ　　ﾉ　　 /
　　　　　　　　　　　　　 ヽ, '　　 /
　　　　　　　　　　　　　　/　　　 |
　　　　　　　　　　　　　 /　　　　|
`;

export default function Home() {
  const [message, setMessage] = useState('ワシが今日の運勢を占ってやろう...');
  const [fortune, setFortune] = useState('');
  const [luckyColor, setLuckyColor] = useState('');
  const [luckyItem, setLuckyItem] = useState('');
  // 新しいStateを追加
  const [workLuck, setWorkLuck] = useState('');
  const [loveLuck, setLoveLuck] = useState('');
  const [moneyLuck, setMoneyLuck] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleFortune = () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    // 新しい運勢をランダムに選択
    const randomWorkLuck = workLucks[Math.floor(Math.random() * workLucks.length)];
    const randomLoveLuck = loveLucks[Math.floor(Math.random() * loveLucks.length)];
    const randomMoneyLuck = moneyLucks[Math.floor(Math.random() * moneyLucks.length)];

    setMessage(randomMessage);
    setFortune(randomFortune);
    setLuckyColor(randomColor);
    setLuckyItem(randomItem);
    // 新しいStateを更新
    setWorkLuck(randomWorkLuck);
    setLoveLuck(randomLoveLuck);
    setMoneyLuck(randomMoneyLuck);
    setShowResult(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md w-full">
        <h1 className="text-5xl font-bold mb-4 text-yellow-300" style={{ fontFamily: "'MS Mincho', serif" }}>くそ占い</h1>
        
        <div className="text-lg whitespace-pre-wrap font-mono text-green-400 my-6">
          {fortuneTellerArt}
        </div>

        <p className="text-lg text-gray-300 mb-8 h-12">"{message}"</p>

        <button
          onClick={handleFortune}
          className="bg-purple-800 hover:bg-purple-900 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg shadow-purple-500/50"
        >
          占う
        </button>

        {showResult && (
          <div className="mt-10 p-6 border-4 border-dashed border-yellow-500 rounded-lg bg-gray-800/50 animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">--- 占い結果 ---</h2>
            <div className="space-y-3 text-left">
              <p className="text-xl"><strong>今日の運勢:</strong> {fortune}</p>
              <p className="text-xl"><strong>ラッキーカラー:</strong> {luckyColor}</p>
              <p className="text-xl"><strong>ラッキーアイテム:</strong> {luckyItem}</p>
              {/* 新しい運勢を表示 */}
              <p className="text-xl"><strong>仕事運:</strong> {workLuck}</p>
              <p className="text-xl"><strong>恋愛運:</strong> {loveLuck}</p>
              <p className="text-xl"><strong>金運:</strong> {moneyLuck}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
