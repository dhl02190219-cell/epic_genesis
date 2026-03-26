export const worldData = {
  core: [
    {
      title: "아스테르 (Aster)",
      description: "배경이 되는 행성의 이름. 태초부터 존재한 거목 '엘라(Elah)'의 힘으로 유지되는 행성입니다. 엘라가 발산하는 생명의 에너지는 행성 전역으로 퍼져나가 각기 다른 환경과 생태계를 조성했으며, 이는 각 지역에 거주하는 지성체들의 기원과 특성에도 결정적인 영향을 미쳤습니다.",
      image: "https://picsum.photos/seed/aster/800/600?blur=2"
    },
    {
      title: "엘라 (Elah)",
      description: "아스테르의 물리적, 개념적 중심. 단순한 나무가 아니라 행성의 법칙 그 자체를 관장하는 '초대 악시모스'가 세계의 균형을 유지하기 위해 영원한 시간 속에서 스스로를 나무의 형태로 봉인한 존재입니다. 자신의 힘이 다할 때를 대비해 '열매'를 통해 자신의 권능(성위)을 계승시키는 시스템을 구축했습니다.",
      image: "https://picsum.photos/seed/elah/800/600?blur=2"
    },
    {
      title: "악시모스 (Axiomos / 성위)",
      description: "세계의 법칙을 새로 쓸 수 있는 절대자. 늙지도, 죽지도 않으며 오직 자신의 의지로만 사라질 수 있는 거대한 존재입니다.",
      image: "https://picsum.photos/seed/axiomos/800/600?blur=2"
    },
    {
      title: "오즈 (Oz)",
      description: "아스테르의 생명 에너지가 지성체에게 깃든 형태로, 마나 회로에 가깝습니다. 몸 안에 흐르는 오즈의 양과 질에 따라 발현 가능한 능력의 종류와 규모가 결정됩니다.",
      image: "https://picsum.photos/seed/oz/800/600?blur=2"
    },
    {
      title: "에덴 (Eden)",
      description: "세계 정중앙에 위치한 삼각형의 작은 섬. 엘라가 뿌리를 내리고 있는 태초의 성지입니다. 어떤 분쟁도, 오염도 닿지 않으며 세 개의 클라비스를 모두 소유한 자만이 엘라의 열매를 만질 수 있습니다.",
      image: "https://picsum.photos/seed/eden/800/600?blur=2"
    },
    {
      title: "조용한 공석 (The Silent Vacancy)",
      description: "마지막 악시모스는 869년 12월 31일, 자신의 소멸이 세계에 어떠한 영향도 미치지 않도록 모든 법칙을 안정화시킨 후 조용히 사라졌습니다. 이 진실은 극소수만이 아는 비밀입니다.",
      image: "https://picsum.photos/seed/vacancy/800/600?blur=2"
    }
  ],
  timeline: [
    { period: "태초의 시대", event: "엘라가 아스테르 행성에 뿌리를 내리고, 초대 악시모스가 세계 질서를 설계합니다." },
    { period: "창조의 시대", event: "엘라가 첫 번째 종족 말라크를 창조합니다. 남은 잔여 오즈로 두 번째 종족 룩타토르가 탄생합니다." },
    { period: "진화의 시대", event: "동물에서 스스로 진화한 세 번째 종족 안트로포스가 등장합니다." },
    { period: "문명의 시대", event: "말라크는 신성 질서 중심, 룩타토르는 전사 문화, 안트로포스는 기술 문명(스팀펑크)을 구축합니다." },
    { period: "침묵의 시대", date: "869년 12월 31일", event: "마지막 악시모스가 세계 법칙을 안정화한 뒤 스스로 소멸합니다. (조용한 공석)" },
    { period: "현재", date: "870년 1월 1일", event: "세 종족의 클라비스가 공명하며 성위 계승 전쟁이 시작됩니다. 안트로포스는 왕녀 사라를 찾아냅니다." }
  ],
  races: [
    {
      id: "malakh",
      name: "말라크 (Malakh)",
      subtitle: "신의 뜻을 전하는 전령",
      nation: "샤마임 / 귀족공화정",
      concept: "그리스·로마풍, 화려하고 엄격한 귀족 문화",
      keywords: ["첫 번째 창조물", "타고난 강자", "오즈의 소유자", "질서에 대한 강박"],
      background: "엘라의 첫 번째 창조물인 말라크는 '오즈'라는 권능을 가장 순수하고 풍부하게 부여받았습니다. 태어나는 순간부터 각자 고유한 힘을 지니며, '선택받았다'는 사실은 그들에게 질서와 원칙을 수호해야 한다는 강박에 가까운 사명감을 심어주었습니다.",
      belief: "우리가 지켜야만 해. (The Burden of Order)\n현재의 '안정'이야말로 초대 악시모스가 원했던 가장 이상적인 질서라고 믿으며, 자신들이 엘라의 유일한 적통 후계자라고 생각합니다.",
      goal: "수호 전쟁\n새로운 악시모스가 되어 이 질서를 '영원히' 고정하고 모든 변수를 통제하는 것.",
      clavis: "하프 (상징: 월계관, 오망성)",
      poster: "https://i.postimg.cc/L89Tk66C/seullaideu1.png",
      themeColor: "from-amber-500/20 to-yellow-900/40",
      textColor: "text-amber-400"
    },
    {
      id: "luctator",
      name: "룩타토르 (Luctator)",
      subtitle: "분투하는 자",
      nation: "게엔나 / 전제군주정",
      concept: "동양풍 의복, 거친 환경에서 단련된 전사들",
      keywords: ["두 번째 창조물", "결핍된 자들의 연대", "숭고한 투쟁", "약자의 분노"],
      background: "말라크를 창조하고 남은 미약하고 불완전한 권능으로 태어났습니다. 개개인이 지닌 '오즈'는 미미하여 생존 자체가 투쟁이었습니다. 그들은 척박한 땅 게엔나에 모여 서로를 의지하며 살아남는 법을 터득했습니다.",
      belief: "우리가 세상을 바꿔야만 해. (The Crusade for Justice)\n현재의 '안정'은 강자인 말라크에게만 유리한 기만적인 평화이자 억압의 굴레입니다. 기존 질서에 대한 전면적인 반역을 꿈꿉니다.",
      goal: "혁명 전쟁\n지배가 아닌 '구원'. 새로운 악시모스가 되어 '강자와 약자'의 개념 자체를 파괴하고 창조 원리를 재기입하는 것.",
      clavis: "뿔나팔 (상징: 가시왕관, 검, 불)",
      poster: "https://i.postimg.cc/7ZZ3GsKD/seullaideu2.png",
      themeColor: "from-red-900/40 to-black/60",
      textColor: "text-red-500"
    },
    {
      id: "anthropos",
      name: "안트로포스 (Anthropos)",
      subtitle: "위를 바라보는 자",
      nation: "가이아 / 입헌군주제",
      concept: "스팀펑크, 기계 장치와 증기 문명",
      keywords: ["창조되지 않은 자", "유한한 생명", "지식에 대한 갈망", "세대 단위의 진화"],
      background: "스스로 동물에서 진화했으며, 아스테르 지성체 중 유일하게 '죽음'이라는 한계를 지닌 종족입니다. 권능(오즈)이 없어 가장 약하지만, 지능과 창의성으로 스팀펑크 문명을 탄생시켰습니다.",
      belief: "우리는 살아남아야만 해. (The Struggle for Existence)\n영원을 사는 자들의 거창한 이념 충돌 속에서 유한한 생명을 가진 안트로포스는 언제나 첫 번째 희생자가 될 것입니다. 이를 거부하는 처절한 생존 본능이 우선합니다.",
      goal: "생존 전쟁\n엘라의 힘을 영원한 생명이나 압도적 방어막을 제공할 궁극의 '생존 자원'으로 손에 넣어 종족의 존망을 보장하는 것.",
      clavis: "오르골 (상징: 회중시계, 톱니바퀴, 황금비율)",
      poster: "https://i.postimg.cc/D0hs2BWy/seullaideu3.png",
      themeColor: "from-orange-800/30 to-stone-900/50",
      textColor: "text-orange-400"
    }
  ],
  characters: [
    // Malakh
    {
      id: "michel",
      raceId: "malakh",
      name: "미셸",
      title: "최고집정관 세라핌",
      position: "귀족회의 1석",
      appearance: "가운데가르마+올림머리, 녹안, 반쯤 감은 무심한 눈매. 금발, 월계관, 금빛 날개+후광, 흰+금색 고대 드레스+검정 이너",
      personality: "MBTI: INTJ | DISC: CD | Enneagram: 1w9 | Strengths: Strategic",
      speech: "권위적",
      image: "https://e1t.uk/AA01.webp"
    },
    {
      id: "auriel",
      raceId: "malakh",
      name: "아우리엘",
      title: "재판관 케루빔",
      position: "귀족회의 2석",
      appearance: "긴 포니테일, 벽안, 반쯤 감은 차분한 눈매. 금발, 월계관, 금빛 날개+후광, 흰+금색 고대 드레스+검정 이너",
      personality: "MBTI: ISTJ | DISC: CS | Enneagram: 1w9 | Strengths: Discipline",
      speech: "권위적",
      image: "https://e1t.uk/AB01.webp"
    },
    {
      id: "yoriella",
      raceId: "malakh",
      name: "요리엘라",
      title: "대도서관장 오파님",
      position: "귀족회의 3석",
      appearance: "일자뱅+애교머리, 탁한 벽안, 반쯤 감은 차분한 눈매. 금발, 월계관, 금빛 날개+후광, 흰+금색 고대 드레스+검정 이너",
      personality: "MBTI: INTP | DISC: SC | Enneagram: 5w4 | Strengths: Learner",
      speech: "조용함, ~할까나 어투",
      image: "https://e1t.uk/AC01.webp"
    },
    {
      id: "laila",
      raceId: "malakh",
      name: "라일라",
      title: "견습전령 안젤루스",
      position: "견습전령",
      appearance: "한쪽 어깨 긴 땋기, 밝은 벽안, 부드러운 웃는 눈매, 작은 날개. 금발, 월계관, 금빛 날개+후광, 흰+금색 고대 드레스+검정 이너",
      personality: "MBTI: ESFJ | DISC: IS | Enneagram: 2w1 | Strengths: Empathy",
      speech: "공손하고 밝음, 존댓말",
      image: "https://e1t.uk/AD01.webp"
    },
    // Luctator
    {
      id: "lucia",
      raceId: "luctator",
      name: "루시아",
      title: "군주 대적자",
      position: "군주",
      appearance: "헝클어진 숏컷, 은근한 미소, 붉은 오니가면. 흑발, 적안, 검은 민소매 기모노+붉은 하오리, 검정+붉은 계열, 검은 fur stole",
      personality: "MBTI: INFJ | DISC: ID | Enneagram: 8w9 | Strengths: Activator",
      speech: "무협지풍 권위적, 본좌 같은 단어",
      image: "https://e1t.uk/AE01.webp"
    },
    {
      id: "asta",
      raceId: "luctator",
      name: "아스타",
      title: "책사",
      position: "책사",
      appearance: "비녀+한쪽 묶음 내림, 차분한 미소, 흰 여우가면. 흑발, 적안, 검은 민소매 기모노+붉은 하오리, 검정+붉은 계열, 검은 fur stole",
      personality: "MBTI: INTJ | DISC: CD | Enneagram: 5w6 | Strengths: Strategic",
      speech: "고혹적, 나긋나긋",
      image: "https://e1t.uk/AF01.webp"
    },
    {
      id: "asmodea",
      raceId: "luctator",
      name: "아스모데아",
      title: "별동대장",
      position: "별동대장",
      appearance: "풀어헤친 긴 머리, 여유로운 미소, 붉은 여우가면. 흑발, 적안, 검은 민소매 기모노+붉은 하오리, 검정+붉은 계열, 검은 fur stole",
      personality: "MBTI: ESTP | DISC: DI | Enneagram: 8w7 | Strengths: Command",
      speech: "고혹적, 나긋나긋, 화끈함",
      image: "https://e1t.uk/AG01.webp"
    },
    {
      id: "lilith",
      raceId: "luctator",
      name: "릴리스",
      title: "견습병사",
      position: "견습병사",
      appearance: "붉은 리본 반묶음, 자신감 있는 눈매+미소, 가면, stole 없음. 흑발, 적안, 검은 민소매 기모노+붉은 하오리, 검정+붉은 계열",
      personality: "MBTI: ESFP | DISC: IS | Enneagram: 7w6 | Strengths: Positivity",
      speech: "활발, 반말, 장난기",
      image: "https://e1t.uk/AH01.webp"
    },
    // Anthropos
    {
      id: "eve",
      raceId: "anthropos",
      name: "이브",
      title: "총리",
      position: "총리",
      appearance: "은발, 웨이브 중간 길이, 연회색 눈, 고글 달린 갈색 모자, 프릴 흰 긴팔 블라우스, 갈색 가죽 코르셋+하네스, 갈색 바지+회중시계 벨트, 갈색 반장갑",
      personality: "MBTI: ENFJ | DISC: ID | Enneagram: 2w1 | Strengths: Activator",
      speech: "온화하나 단호, 존댓말",
      image: "https://e1t.uk/AI01.webp"
    },
    {
      id: "rebecca",
      raceId: "anthropos",
      name: "레베카",
      title: "발명가 + 의원",
      position: "의원",
      appearance: "분홍 머리, 한쪽 어깨 느슨한 땋기, 활짝 웃는 눈웃음, 머리 위 고글, 흰 셔츠+올리브그린 롱코트, 갈색 가죽 크로스백+반장갑, 갈색 카고바지",
      personality: "MBTI: ENTP | DISC: ID | Enneagram: 7w8 | Strengths: Ideation",
      speech: "경쾌하고 거침없음, 반말",
      image: "https://e1t.uk/AJ01.webp"
    },
    {
      id: "sarah",
      raceId: "anthropos",
      name: "사라",
      title: "왕녀",
      position: "왕녀",
      appearance: "애쉬브라운 머리, 자연스러운 포니테일, 갈안, 홍조+살짝 지친 눈매, 짧은 갈색 후드 망토, 가슴 파인 흰 셔츠, 갈색 코르셋, 하늘색 프릴 덧댄 갈색 주름치마",
      personality: "MBTI: INFP | DISC: SI | Enneagram: 4w5 | Strengths: Harmony",
      speech: "내성적이고 조용함, 문학적",
      image: "https://e1t.uk/AK01.webp"
    },
    {
      id: "gloria",
      raceId: "anthropos",
      name: "글로리아",
      title: "시민",
      position: "시민",
      appearance: "주황 머리, 잔머리 흩날리는 올림머리, 황안, 주근깨+부드러운 미소, 톱니바퀴 넥타이/초커, 프릴 흰 반팔 블라우스, 버클 多 갈색 가죽 코르셋, 갈색 주름치마",
      personality: "MBTI: ISFJ | DISC: SC | Enneagram: 9w1 | Strengths: Empathy",
      speech: "조용하고 공손, 소심함",
      image: "https://e1t.uk/AL01.webp"
    }
  ]
};
