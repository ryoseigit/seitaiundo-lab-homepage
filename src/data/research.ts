export interface ResearchTopic {
  slug: string;
  title: string;
  desc: string;
  image: string;
  overview: string;
  details: string[];
}

export const researchTopics: ResearchTopic[] = [
  {
    slug: "actin-binding-proteins",
    title: "アクチンと結合タンパク質",
    desc: "アクチン重合とATP加水分解、また結合タンパク質による制御の1分子レベル理解。Actin and Actin-Binding ProteinsMolecular analysis of actin polymerization, ATP hydrolysis, and regulation by binding proteins.",
    image: "research_actin.png",
    overview: "アクチンがどのように重合し、ATP加水分解と結合タンパク質の制御によって機能を変化させるのかを、単一分子レベルで解き明かしています。",
    details: [
      "アクチンフィラメントは、細胞骨格の基本構成要素として運動、分裂、形態形成に深く関わっています。私たちは、重合速度やフィラメントの安定性がどのように制御されるかを、分子レベルで観察しながら理解を進めています。",
      "結合タンパク質がアクチンの構造や動態に与える影響を明らかにし、細胞内での柔軟な応答制御のしくみを探っています。"
    ]
  },
  {
    slug: "optical-control-actin",
    title: "光制御によるアクチン細胞骨格のダイナミクスの繰り返し制御",
    desc: "Optical Control of the Actin Cytoskeleton Engineering light-switchable molecules to regulate actin dynamics.",
    image: "research_light.png",
    overview: "光を使ってアクチンのダイナミクスをオン・オフする分子を設計し、細胞骨格の制御を繰り返し行う手法を開発しています。",
    details: [
      "光応答性分子を導入することで、アクチン重合や分解を外部から任意に制御できる系を構築しています。これにより、細胞内の動態変化を時系列で追跡しやすくなります。",
      "この技術は、細胞応答の再現性高い研究や、生命現象の時間制御に向けた基盤技術として期待されています。"
    ]
  },
  {
    slug: "liposomes",
    title: "リポソーム",
    desc: "人工脂質膜を用いて、細胞を模した反応系。Liposomes Cell-mimetic reaction systems based on artificial lipid membranes.",
    image: "research_liposome.png",
    overview: "人工脂質膜の中で細胞のような反応系を再現し、膜界面で起こる現象を理解するためのモデル系を研究しています。",
    details: [
      "リポソームは、細胞膜を模した単純で制御しやすい系として利用されています。膜の構造や透過、局所反応の再現により、細胞的な振る舞いを分子レベルで解析できます。",
      "私たちは、膜の組成や外部刺激に応じて反応系がどのように変化するかを探り、人工的な生命様反応の設計に取り組んでいます。"
    ]
  },
  {
    slug: "mreb",
    title: "MreB（細菌ver.アクチン）",
    desc: "特に細胞を動かす能力を持つMreBの作用解明。Understanding how the bacterial actin homolog MreB contributes to cell motility.",
    image: "research_mreb.png",
    overview: "細菌のアクチンホモログであるMreBが、どのようにセルロース合成装置や細胞形態形成に関わるかを調べています。",
    details: [
      "MreBは、細菌の細胞形態維持や運動に関わる重要な分子です。アクチンとの比較を通じて、進化的な違いと共通性を理解することを目指しています。",
      "特に、細胞を動かす能力に関わる分子機構を明らかにし、細菌の運動と形態形成の分子基盤を解明しています。"
    ]
  }
];
