import { College, Department, Notice } from './types'

export const colleges: College[] = [
  { id: 'human',     name: '인문대학' },
  { id: 'social',    name: '사회과학대학' },
  { id: 'natural',   name: '자연과학대학' },
  { id: 'eng',       name: '공과대학' },
  { id: 'edu',       name: '사범대학' },
  { id: 'econ-trade',name: '경제통상대학' },
  { id: 'biz',       name: '경영대학' },
  { id: 'pharmacy',  name: '약학대학' },
  { id: 'life',      name: '생활과학대학' },
  { id: 'arts',      name: '예술대학' },
  { id: 'nano',      name: '나노과학기술대학' },
  { id: 'bio-res',   name: '생명자원과학대학' },
  { id: 'nursing',   name: '간호대학' },
  { id: 'medicine',  name: '의과대학' },
  { id: 'ibe',       name: '정보의생명공학대학' },
  { id: 'undergrad', name: '학부대학' },
]

export const departments: Department[] = [
  // 인문대학
  { id: 'kor-lit',      collegeId: 'human',      name: '국어국문학과' },
  { id: 'jpn-lit',      collegeId: 'human',      name: '일어일문학과' },
  { id: 'fre-lit',      collegeId: 'human',      name: '불어불문학과' },
  { id: 'rus-lit',      collegeId: 'human',      name: '노어노문학과' },
  { id: 'chi-lit',      collegeId: 'human',      name: '중어중문학과' },
  { id: 'eng-lit',      collegeId: 'human',      name: '영어영문학과' },
  { id: 'ger-lit',      collegeId: 'human',      name: '독어독문학과' },
  { id: 'hanmun',       collegeId: 'human',      name: '한문학과' },
  { id: 'linguistics',  collegeId: 'human',      name: '언어정보학과' },
  { id: 'history',      collegeId: 'human',      name: '사학과' },
  { id: 'philosophy',   collegeId: 'human',      name: '철학과' },
  { id: 'archaeology',  collegeId: 'human',      name: '고고학과' },

  // 사회과학대학
  { id: 'pub-adm',      collegeId: 'social',     name: '행정학과' },
  { id: 'polsci',       collegeId: 'social',     name: '정치외교학과' },
  { id: 'swf',          collegeId: 'social',     name: '사회복지학과' },
  { id: 'sociology',    collegeId: 'social',     name: '사회학과' },
  { id: 'psychology',   collegeId: 'social',     name: '심리학과' },
  { id: 'libinfo',      collegeId: 'social',     name: '문헌정보학과' },
  { id: 'media-comm',   collegeId: 'social',     name: '미디어커뮤니케이션학과' },

  // 자연과학대학
  { id: 'math',         collegeId: 'natural',    name: '수학과' },
  { id: 'stats',        collegeId: 'natural',    name: '통계학과' },
  { id: 'physics',      collegeId: 'natural',    name: '물리학과' },
  { id: 'chemistry',    collegeId: 'natural',    name: '화학과' },
  { id: 'biology',      collegeId: 'natural',    name: '생명과학과' },
  { id: 'microbio',     collegeId: 'natural',    name: '미생물학과' },
  { id: 'molbio',       collegeId: 'natural',    name: '분자생물학과' },
  { id: 'geology',      collegeId: 'natural',    name: '지질환경과학과' },
  { id: 'atmos',        collegeId: 'natural',    name: '대기환경과학과' },
  { id: 'ocean',        collegeId: 'natural',    name: '해양학과' },

  // 공과대학
  { id: 'mech-eng',     collegeId: 'eng',        name: '기계공학부' },
  { id: 'polymer',      collegeId: 'eng',        name: '고분자공학과' },
  { id: 'omse',         collegeId: 'eng',        name: '유기소재시스템공학과' },
  { id: 'chem-bio-eng', collegeId: 'eng',        name: '화공생명공학과' },
  { id: 'env-eng',      collegeId: 'eng',        name: '환경공학과' },
  { id: 'electronics',  collegeId: 'eng',        name: '전기전자공학부-전자공학전공' },
  { id: 'electrical',   collegeId: 'eng',        name: '전기전자공학부-전기공학전공' },
  { id: 'semiconductor',collegeId: 'eng',        name: '전기전자공학부-반도체공학전공' },
  { id: 'naoe',         collegeId: 'eng',        name: '조선해양공학과' },
  { id: 'materials',    collegeId: 'eng',        name: '재료공학부' },
  { id: 'industrial',   collegeId: 'eng',        name: '산업공학과' },
  { id: 'aerospace',    collegeId: 'eng',        name: '항공우주공학과' },
  { id: 'arch-eng',     collegeId: 'eng',        name: '건축공학과' },
  { id: 'architecture', collegeId: 'eng',        name: '건축학과' },
  { id: 'urban',        collegeId: 'eng',        name: '도시공학과' },
  { id: 'civil',        collegeId: 'eng',        name: '사회기반시스템공학과' },
  { id: 'future-city',  collegeId: 'eng',        name: '미래도시건축환경융합전공' },
  { id: 'adv-it',       collegeId: 'eng',        name: '첨단IT자율전공' },
  { id: 'adv-mobility', collegeId: 'eng',        name: '첨단모빌리티자율전공' },
  { id: 'adv-materials',collegeId: 'eng',        name: '첨단소재자율전공' },
  { id: 'smart-city',   collegeId: 'eng',        name: '스마트시티전공' },

  // 사범대학
  { id: 'kor-edu',      collegeId: 'edu',        name: '국어교육과' },
  { id: 'eng-edu',      collegeId: 'edu',        name: '영어교육과' },
  { id: 'ger-edu',      collegeId: 'edu',        name: '독어교육과' },
  { id: 'fre-edu',      collegeId: 'edu',        name: '불어교육과' },
  { id: 'education',    collegeId: 'edu',        name: '교육학과' },
  { id: 'early-child',  collegeId: 'edu',        name: '유아교육과' },
  { id: 'special-edu',  collegeId: 'edu',        name: '특수교육과' },
  { id: 'social-edu',   collegeId: 'edu',        name: '일반사회교육과' },
  { id: 'history-edu',  collegeId: 'edu',        name: '역사교육과' },
  { id: 'geo-edu',      collegeId: 'edu',        name: '지리교육과' },
  { id: 'ethics-edu',   collegeId: 'edu',        name: '윤리교육과' },
  { id: 'math-edu',     collegeId: 'edu',        name: '수학교육과' },
  { id: 'phys-edu',     collegeId: 'edu',        name: '물리교육과' },
  { id: 'chem-edu',     collegeId: 'edu',        name: '화학교육과' },
  { id: 'bio-edu',      collegeId: 'edu',        name: '생물교육과' },
  { id: 'earth-edu',    collegeId: 'edu',        name: '지구과학교육과' },
  { id: 'pe-edu',       collegeId: 'edu',        name: '체육교육과' },

  // 경제통상대학
  { id: 'trade',        collegeId: 'econ-trade', name: '무역학부' },
  { id: 'econ',         collegeId: 'econ-trade', name: '경제학부' },
  { id: 'tourism',      collegeId: 'econ-trade', name: '관광컨벤션학과' },
  { id: 'intl-studies', collegeId: 'econ-trade', name: '국제학부' },
  { id: 'pub-policy',   collegeId: 'econ-trade', name: '공공정책학부' },

  // 경영대학
  { id: 'biz-admin',    collegeId: 'biz',        name: '경영학과' },

  // 약학대학
  { id: 'pharmacy-maj', collegeId: 'pharmacy',   name: '약학전공' },
  { id: 'pharma-mfg',   collegeId: 'pharmacy',   name: '제약학전공' },

  // 생활과학대학
  { id: 'child-family', collegeId: 'life',       name: '아동가족학과' },
  { id: 'fashion',      collegeId: 'life',       name: '의류학과' },
  { id: 'food-nutrition',collegeId: 'life',      name: '식품영양학과' },
  { id: 'interior',     collegeId: 'life',       name: '실내환경디자인학과' },
  { id: 'sports-sci',   collegeId: 'life',       name: '스포츠과학과' },

  // 예술대학
  { id: 'music',        collegeId: 'arts',       name: '음악학과' },
  { id: 'korean-music', collegeId: 'arts',       name: '한국음악학과' },
  { id: 'fine-arts',    collegeId: 'arts',       name: '미술학과' },
  { id: 'plastic-arts', collegeId: 'arts',       name: '조형학과' },
  { id: 'design',       collegeId: 'arts',       name: '디자인학과' },
  { id: 'dance',        collegeId: 'arts',       name: '무용학과' },
  { id: 'arts-media',   collegeId: 'arts',       name: '예술문화영상학과' },

  // 나노과학기술대학
  { id: 'nano-mech',    collegeId: 'nano',       name: '나노메카트로닉스공학과' },
  { id: 'nano-energy',  collegeId: 'nano',       name: '나노에너지공학과' },
  { id: 'opto-mech',    collegeId: 'nano',       name: '광메카트로닉스공학과' },

  // 생명자원과학대학
  { id: 'plant-bio',    collegeId: 'bio-res',    name: '식물생명과학과' },
  { id: 'horticulture', collegeId: 'bio-res',    name: '원예생명과학과' },
  { id: 'animal-sci',   collegeId: 'bio-res',    name: '동물생명자원과학과' },
  { id: 'food-eng',     collegeId: 'bio-res',    name: '식품공학과' },
  { id: 'life-env-chem',collegeId: 'bio-res',    name: '생명환경화학과' },
  { id: 'bio-mat',      collegeId: 'bio-res',    name: '바이오소재과학과' },
  { id: 'bio-ind-mech', collegeId: 'bio-res',    name: '바이오산업기계공학과' },
  { id: 'landscape',    collegeId: 'bio-res',    name: '조경학과' },
  { id: 'food-econ',    collegeId: 'bio-res',    name: '식품자원경제학과' },
  { id: 'it-applied',   collegeId: 'bio-res',    name: 'IT응용공학과' },
  { id: 'bio-env-energy',collegeId: 'bio-res',   name: '바이오환경에너지학과' },

  // 간호대학
  { id: 'nursing-maj',  collegeId: 'nursing',    name: '간호학과' },

  // 의과대학
  { id: 'medicine-maj', collegeId: 'medicine',   name: '의과대학' },

  // 정보의생명공학대학
  { id: 'cse',          collegeId: 'ibe',        name: '정보컴퓨터공학부' },
  { id: 'cs-track',     collegeId: 'ibe',        name: '정보컴퓨터공학부-컴퓨터공학전공' },
  { id: 'ai-track',     collegeId: 'ibe',        name: '정보컴퓨터공학부-인공지능전공' },
  { id: 'design-tech',  collegeId: 'ibe',        name: '디자인테크놀로지전공' },
  { id: 'biomedical',   collegeId: 'ibe',        name: '의생명융합공학부' },
  { id: 'ibe-self',     collegeId: 'ibe',        name: '정보의생명공학자율전공' },

  // 학부대학
  { id: 'liberal',      collegeId: 'undergrad',  name: '자유전공학부' },
  { id: 'adv-conv',     collegeId: 'undergrad',  name: '첨단융합학부' },
  { id: 'future-energy',collegeId: 'undergrad',  name: '미래에너지전공' },
  { id: 'nano-dev-mfg', collegeId: 'undergrad',  name: '나노소자첨단제조전공' },
  { id: 'opto-track',   collegeId: 'undergrad',  name: '광메카트로닉스공학전공' },
  { id: 'ai-comp',      collegeId: 'undergrad',  name: 'AI융합계산과학전공' },
  { id: 'applied-life', collegeId: 'undergrad',  name: '응용생명융합학부' },
  { id: 'green-bio',    collegeId: 'undergrad',  name: '그린바이오과학전공' },
  { id: 'bio-res-sys',  collegeId: 'undergrad',  name: '생명자원시스템공학전공' },
  { id: 'global-lib',   collegeId: 'undergrad',  name: '글로벌자유전공학부' },
]

export const notices: Notice[] = [
  { id: 'n1',  department: '의류학과',            title: '2026학년도 1학기 성적 정정 기간 안내',          body: '성적 정정 기간은 6월 20일부터 24일까지입니다. 담당 교수님께 문의 후 정정 신청 바랍니다.',                                                                           publishedAt: '2026-06-08T08:00:00+09:00' },
  { id: 'n2',  department: '정보컴퓨터공학부',     title: '교내 장학금 신청 접수 시작',                    body: '2학기 교내 장학금 신청을 받습니다. 마감은 6월 30일입니다.',                                                                                                      publishedAt: '2026-06-08T12:00:00+09:00' },
  { id: 'n3',  department: '의류학과',            title: '2026 의류학과 졸업작품 전시회 안내',             body: '4학년 학생들의 한 학기 작업을 한자리에서 만나보세요. 일시 6/20~24, 장소 디자인관 1층 전시홀.',                                                                     publishedAt: '2026-06-08T10:00:00+09:00' },
  { id: 'n4',  department: '기계공학부',           title: '하계 계절학기 수강신청 일정',                    body: '계절학기 수강신청은 6월 12일 10시부터입니다.',                                                                                                                   publishedAt: '2026-06-07T09:00:00+09:00' },
  { id: 'n5',  department: '경영학과',            title: '교환학생 프로그램 설명회 개최',                   body: '2026 가을학기 교환학생 파견 설명회를 개최합니다.',                                                                                                                publishedAt: '2026-06-06T15:00:00+09:00' },
  { id: 'n6',  department: '정보컴퓨터공학부',     title: 'SW 캡스톤 디자인 경진대회 모집',                 body: '4학년 대상 캡스톤 경진대회 참가팀을 모집합니다.',                                                                                                                publishedAt: '2026-06-06T11:00:00+09:00' },
  { id: 'n7',  department: '전기전자공학부-전자공학전공', title: '국가장학금 2차 신청 안내',               body: '한국장학재단 국가장학금 2차 신청 기간입니다.',                                                                                                                    publishedAt: '2026-06-05T13:00:00+09:00' },
  { id: 'n8',  department: '영어영문학과',         title: '원어민 회화 특강 수강생 모집',                   body: '여름방학 원어민 영어회화 특강 수강생을 모집합니다.',                                                                                                              publishedAt: '2026-06-05T10:00:00+09:00' },
  { id: 'n9',  department: '경영학과',            title: '대기업 채용설명회(삼성·LG) 안내',               body: '취업지원센터 주관 대기업 채용설명회가 열립니다.',                                                                                                                 publishedAt: '2026-06-04T14:00:00+09:00' },
  { id: 'n10', department: '경영학과',            title: 'CPA 준비반 모집 공고',                          body: '회계 관련 자격증 준비반 신규 기수를 모집합니다.',                                                                                                                publishedAt: '2026-06-04T09:00:00+09:00' },
  { id: 'n11', department: '국어국문학과',         title: '인문학 콜로키엄 — 6월 특별강연',                 body: '6월 인문학 콜로키엄 특별강연을 안내드립니다.',                                                                                                                    publishedAt: '2026-06-03T16:00:00+09:00' },
  { id: 'n12', department: '경제학부',            title: '경제학부 학술제 발표자 모집',                    body: '2026 경제학부 학술제 발표자를 모집합니다.',                                                                                                                      publishedAt: '2026-06-02T10:00:00+09:00' },
  { id: 'n13', department: '정보컴퓨터공학부',     title: '2026학년도 2학기 수강신청 사전 안내',            body: '2학기 수강신청은 7월 14일부터 시작됩니다. 수강신청 포털에서 희망 과목을 미리 확인하세요.',                                                                          publishedAt: '2026-06-08T07:30:00+09:00' },
  { id: 'n14', department: '기계공학부',           title: '기계공학부 우수 논문상 수상자 발표',              body: '2026년 1학기 우수 논문상 수상자를 발표합니다. 수상자는 학과 홈페이지에서 확인 바랍니다.',                                                                            publishedAt: '2026-06-07T16:00:00+09:00' },
  { id: 'n15', department: '무역학부',            title: '무역학부 글로벌 인턴십 모집 공고',               body: '해외 무역회사 인턴십 프로그램 참가자를 모집합니다. 지원기간: 6월 10일~20일.',                                                                                       publishedAt: '2026-06-07T14:30:00+09:00' },
  { id: 'n16', department: '전기전자공학부-전자공학전공', title: '실험실 안전교육 필수 이수 안내',           body: '하계방학 전 실험실 안전교육을 필수로 이수해야 합니다. 미이수 시 실험실 출입이 제한됩니다.',                                                                            publishedAt: '2026-06-07T11:00:00+09:00' },
  { id: 'n17', department: '경영학과',            title: '스타트업 창업 지원 프로그램 모집',               body: '교내 창업지원센터와 연계한 스타트업 지원 프로그램 참가팀을 모집합니다.',                                                                                              publishedAt: '2026-06-06T13:00:00+09:00' },
  { id: 'n18', department: '국어국문학과',         title: '문학상 수상작 전시',                            body: '2026 국어국문학과 문학상 수상작 전시를 6월 15일부터 19일까지 인문관 로비에서 개최합니다.',                                                                            publishedAt: '2026-06-06T09:30:00+09:00' },
  { id: 'n19', department: '경제학부',            title: '세무사 자격시험 대비 특강 개설',                 body: '학생 대상 세무사 자격시험 대비 특강을 7월 방학 중 개설합니다.',                                                                                                    publishedAt: '2026-06-05T15:00:00+09:00' },
  { id: 'n20', department: '의류학과',            title: '산학협력 패션 인턴십 모집',                     body: '국내 패션기업과의 산학협력 인턴십 참가자를 모집합니다. 지원서는 6월 16일까지 제출.',                                                                                  publishedAt: '2026-06-05T08:30:00+09:00' },
  { id: 'n21', department: '경제학부',            title: '한국은행 경제 현장탐방 프로그램 참가자 모집',     body: '한국은행 부산본부 주관 경제 현장탐방 프로그램에 경제학부 학생을 초청합니다.',                                                                                        publishedAt: '2026-06-04T16:00:00+09:00' },
  { id: 'n22', department: '영어영문학과',         title: '졸업 요건 변경 안내',                           body: '2023학번부터 영어 공인 성적 제출이 졸업 요건에서 제외됩니다. 세부 사항은 학과 사무실에 문의 바랍니다.',                                                                  publishedAt: '2026-06-04T10:00:00+09:00' },
  { id: 'n23', department: '정보컴퓨터공학부',     title: '동문 특강 — AI 스타트업 창업 이야기',            body: '실리콘밸리 AI 스타트업을 창업한 동문의 특강을 6월 18일 오후 3시 공학관 102호에서 개최합니다.',                                                                       publishedAt: '2026-06-03T14:00:00+09:00' },
  { id: 'n24', department: '기계공학부',           title: '설계 경진대회 참가팀 모집',                     body: '창의 기계 설계 경진대회 참가팀을 모집합니다. 팀당 3~5인으로 구성.',                                                                                               publishedAt: '2026-06-03T11:00:00+09:00' },
  { id: 'n25', department: '무역학부',            title: '1학기 성적 우수 장학생 선발 결과',              body: '1학기 성적 우수 장학생 선발 결과를 발표합니다. 수혜자는 개별 통보 예정입니다.',                                                                                       publishedAt: '2026-06-03T09:00:00+09:00' },
  { id: 'n26', department: '전기전자공학부-전자공학전공', title: '학술대회 논문 초록 모집',                 body: '2026 전기전자공학 학술대회 논문 초록을 모집합니다. 제출 마감: 7월 5일.',                                                                                             publishedAt: '2026-06-02T15:00:00+09:00' },
  { id: 'n27', department: '경영학과',            title: '해외 MBA 진학 설명회',                          body: '미국·유럽 주요 MBA 과정 진학 희망자 대상 설명회를 개최합니다. 일시: 6월 19일 오후 2시.',                                                                            publishedAt: '2026-06-02T13:00:00+09:00' },
  { id: 'n28', department: '국어국문학과',         title: '대학원 진학 설명회',                            body: '대학원 진학을 희망하는 학부생을 위한 설명회를 6월 17일 인문관 301호에서 개최합니다.',                                                                                 publishedAt: '2026-06-02T09:00:00+09:00' },
]

export const deptName = (id: string) => departments.find(d => d.id === id)?.name ?? id
export const collegeName = (id: string) => colleges.find(c => c.id === id)?.name ?? id
export const deptsOfCollege = (collegeId: string) => departments.filter(d => d.collegeId === collegeId)
