export type Post = {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  content: string[];
};

export const posts: Post[] = [
  {
    id: "1",
    title: "桑原研、大沼研と合同で流しそうめんをしました！",
    date: "2024.11.20",
    category: "News",
    image:
      "src/assets/nagashisoumen.jpg",
    excerpt: "夏の恒例行事として、桑原研・大沼研と合同で流しそうめんを開催しました。",
    content: [
      "夏の暑さを忘れるために、桑原研と大沼研のみなさんと合同で流しそうめん会を開きました。準備から片付けまで協力し、他研究室との交流も深まりました。",
      "研究の話だけでなく、学年を超えた雑談や今後の共同研究アイデアも飛び交い、有意義な時間となりました。",
      "来年度もさらに規模を拡大し、地域の方々も巻き込んだイベントにできればと考えています。"
    ]
  },
  {
    id: "2",
    title:
      "D3の三谷さんの論文「Microscopic and structural observations of actin filament capping and severing by cytochalasin D」がPNASに掲載されました！",
    date: "2024.10.05",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    excerpt: "アクチンフィラメントのキャッピングと切断機構を明らかにした研究がPNASに掲載されました。",
    content: [
      "D3の三谷さんによる、アクチンフィラメントに対するcytochalasin Dの作用機構を解明した研究成果がPNASに掲載されました。",
      "電子顕微鏡観察とシミュレーションを組み合わせ、キャッピングと切断がどのように進行するかを詳細に示した点が評価されました。",
      "共同研究者や技術支援をいただいた皆さまに感謝申し上げます。詳細はPNAS掲載論文をご覧ください。"
    ]
  },
  {
    id: "3",
    title: "タイのチュラロンコン大学から短期留学生の学生さんが来ました！",
    date: "2024.08.15",
    category: "Event",
    image:
      "src/assets/get_kun.jpg",
    excerpt: "海外交流プログラムの一環で、チュラロンコン大学から短期留学生を受け入れました。",
    content: [
      "国際連携の強化を目的に、タイのチュラロンコン大学から短期留学生を受け入れました。研究テーマや実験手法を共有し、お互いのバックグラウンドを尊重しながら学び合っています。",
      "研究室内でのポスター発表や、地域文化を紹介する交流会も実施し、学生間の距離が一気に縮まりました。",
      "今後も双方向の交換プログラムを継続し、国際共同研究へと発展させていく予定です。"
    ]
  },
  {
    id: "4",
    title: "研究室のジャケ写を撮りました！",
    date: "2026.04.",
    category: "Event",
    image:
      "src/assets/lab_jacket.jpg",
    excerpt: "桜とともに研究室メンバーで写真を撮りました。",
    content: [
      "毎年恒例の技大校内の桜が満開の時期に、研究室メンバーでジャケット写真を撮影しました。新しいメンバーも加わり、和気あいあいとした雰囲気の中で撮影が行われました。",
      "研究室内でのポスター発表や、地域文化を紹介する交流会も実施し、学生間の距離が一気に縮まりました。",
      "今後も双方向の交換プログラムを継続し、国際共同研究へと発展させていく予定です。"
    ]
  }
];
