import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {
  let { labels, values } = useAcademystats();
  // const { labels, values } = academyStats;
  // 生成隨機色碼的函式
  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i += 1) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };
  let collegeColor = [];

  // 文學院
  const artcollege = ["中國文學系",
  "外國語文學系",
  "歷史學系",
  "哲學系",
  "人類學系",
  "圖書資訊學系",
  "日本語文學系",
  "戲劇學系",
  "藝術史研究所",
  "語言學研究所",
  "音樂學研究所",
  "臺灣文學研究所",
  "華語教學碩士學位學程",
  "翻譯碩士學位學程",
  "外國語文學系 / 圖書資訊學系",
  "外國語文學系/社會學系"];
  // 理學院
  const sciencecollege = ["數學系",
  "物理學系",
  "化學系",
  "地質科學系",
  "心理學系",
  "地理環境資源學系",
  "大氣科學系",
  "海洋研究所",
  "天文物理研究所",
  "應用物理研究所",
  "應用數學科學研究所",
  "統計與數據科學研究所",
  "氣候變遷與永續發展國際學位學程(含碩士班、博士班)",
  "地球系統科學國際研究生博士學位學程",
  "心理所一般組"];
  // 社會科學院
  const socialSciencescollege = ["政治學系",
  "經濟學系",
  "經濟學系",
  "社會學系",
  "社會工作學系",
  "國家發展研究所",
  "新聞研究所",
  "公共事務研究所"];
  // 醫學院
  const medicinecollege = ["牙醫專業學院",
  "牙醫學系",
  "臨床牙醫學研究所",
  "口腔生物科學研究所",
  "藥學專業學院",
  "藥學系",
  "臨床藥學研究所",
  "藥物研究中心",
  "物理治療學系"];
  // 工學院
  const engineeringcollege = ["土木工程學系",
  "機械工程學系",
  "化學工程學系",
  "工程科學及海洋工程學系",
  "材料科學與工程學系",
  "醫學工程學系",
  "環境工程學研究所",
  "應用力學研究所",
  "建築與城鄉研究所",
  "工業工程學研究所",
  "高分子科學與工程學研究所"];
  // 生物資源暨農學院
  const bioResourcesAndAgricultureColalge = ["獸醫專業學院",
  "獸醫學系",
  "臨床動物醫學研究所",
  "分子暨比較病理生物學研究所",
  "農藝學系",
  "生物環境系統工程學系",
  "農業化學系",
  "森林環境暨資源學系",
  "動物科學技術學系",
  "農業經濟學系",
  "園藝暨景觀學系",
  "生物產業傳播暨發展學系",
  "生物機電工程學系",
  "昆蟲學系",
  "植物病理與微生物學系",
  "食品科技研究所",
  "生物科技研究所",
  "植物醫學碩士學位學程",
  "生物科技與食品營養學士學位學程"]
  // 管理學院
  const managementcollege = ["工商管理學系",
  "工商管理學系 科技管理組",
  "會計學系",
  "財務金融學系",
  "國際企業學系",
  "資訊管理學系",
  "商學研究所"]
  // 公共衛生學院
  // const publicHealthcollege = ["公共衛生學系",
  // "健康政策與管理研究所",
  // "環境與職業健康科學研究所",
  // "流行病學與預防醫學研究所",
  // "健康行為與社區科學研究所",
  // "食品安全與健康研究所",
  // "健康數據拓析統計研究所"]
  // 電機資訊學院
  const electricalEngineeringAndComputerSciencecollege = ["電機工程學系",
  "資訊工程學系",
  "光電工程學研究所",
  "電信工程學研究所",
  "電子工程學研究所",
  "生醫電資所",
  "資訊工程研究所"]
  // 法律學院
  const lawSchool = [
  "法律學系",
  "科際整合法律學研究所"]
  // 生命科學院
  // const biotechcollege = [
  // "生命科學系",
  // "生化科技學系",
  // "植物科學研究所",
  // "分子與細胞生物學研究所",
  // "生態學與演化生物學研究所",
  // "漁業科學研究所",
  // "生化科學研究所"]
  // 創新設計學院
  const dSchool = ["創新領域學士學位學程"]

  // 各學院人數
  const groupedValues = {
    art: 0,
    science: 0,
    socialSciences: 0,
    medicine: 0,
    engineering: 0,
    bioResourcesAndAgriculture: 0,
    management: 0,
    // publicHealth: 0,
    electricalEngineeringAndComputerScience: 0,
    law: 0,
    // biotech: 0,
    d: 0,
  };
  
  // 各學院計算人數(迴圈加總)
  if (labels) {
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const value = values[i];
  
      if (artcollege.includes(label)) {
        groupedValues.art += value;
      } else if (sciencecollege.includes(label)) {
        groupedValues.science += value;
      } else if (socialSciencescollege.includes(label)) {
        groupedValues.socialSciences += value;
      } else if (medicinecollege.includes(label)) {
        groupedValues.medicine += value;
      } else if (engineeringcollege.includes(label)) {
        groupedValues.engineering += value;
      } else if (bioResourcesAndAgricultureColalge.includes(label)) {
        groupedValues.bioResourcesAndAgriculture += value;
      } else if (managementcollege.includes(label)) {
        groupedValues.management += value;
      // } else if (publicHealthcollege.includes(label)) {
      //   groupedValues.publicHealth += value;
      } else if (electricalEngineeringAndComputerSciencecollege.includes(label)) {
        groupedValues.electricalEngineeringAndComputerScience += value;
      } else if (lawSchool.includes(label)) {
        groupedValues.law += value;
      // } else if (biotechcollege.includes(label)) {
      //   groupedValues.biotech += value;
      } else if (dSchool.includes(label)) {
        groupedValues.d += value;
      }
    }

    const nameMapping = {
      "art": "文學院",
      "science": "理學院",
      "socialSciences": "社會科學院",
      "medicine": "醫學院",
      "engineering": "工學院",
      "bioResourcesAndAgriculture": "生物資源暨農學院",
      "management": "管理學院",
      "electricalEngineeringAndComputerScience": "電機資訊學院",
      "law": "法律學院",
      "d": "創新設計學院"
    };

    const colorMapping = {
      "art": "#FCFCFC",
      "science": "#FFFF37",
      "socialSciences": "#6F00D2",
      "medicine": "#00A600",
      "engineering": "#EA0000",
      "bioResourcesAndAgriculture": "#FFF4C1",
      "management": "#ADADAD",
      "electricalEngineeringAndComputerScience": "#0000C6",
      "law": "#6F00D2",
      "d": "#3C3C3C"
    }
  
    const groupBycollege = {
      labels: Object.keys(groupedValues),
      values: Object.values(groupedValues)
    }
    labels = groupBycollege.labels;

    collegeColor = labels.map(originalName => colorMapping[originalName] || originalName);
    labels = labels.map(originalName => nameMapping[originalName] || originalName);
    values = groupBycollege.values;

  }

  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: values,
        backgroundColor: collegeColor,
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full bg-white shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
