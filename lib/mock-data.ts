import { College, Department, Notice } from './types'

export const colleges: College[] = [
  { id: 'eng', name: '공과대학' },
  { id: 'human', name: '인문대학' },
  { id: 'biz', name: '경영대학' },
]

export const departments: Department[] = [
  { id: 'cse', collegeId: 'eng', name: '컴퓨터공학과' },
  { id: 'me', collegeId: 'eng', name: '기계공학과' },
  { id: 'ee', collegeId: 'eng', name: '전기공학과' },
  { id: 'cloth', collegeId: 'human', name: '의류학과' },
  { id: 'eng-lit', collegeId: 'human', name: '영어영문학과' },
  { id: 'kor-lit', collegeId: 'human', name: '국어국문학과' },
  { id: 'biz-admin', collegeId: 'biz', name: '경영학과' },
  { id: 'acct', collegeId: 'biz', name: '회계학과' },
  { id: 'econ', collegeId: 'biz', name: '경제학과' },
  { id: 'trade', collegeId: 'biz', name: '무역학과' },
]

export const notices: Notice[] = [
  { id: 'n1', deptId: 'cloth', title: '2026학년도 1학기 성적 정정 기간 안내', body: '성적 정정 기간은 6월 20일부터 24일까지입니다. 담당 교수님께 문의 후 정정 신청 바랍니다.', category: '학사', publishedAt: '2026-06-08T08:00:00+09:00', views: 1532, isImportant: true },
  { id: 'n2', deptId: 'cse', title: '교내 장학금 신청 접수 시작', body: '2학기 교내 장학금 신청을 받습니다. 마감은 6월 30일입니다.', category: '장학', publishedAt: '2026-06-08T12:00:00+09:00', views: 842, isImportant: false },
  { id: 'n3', deptId: 'cloth', title: '2026 의류학과 졸업작품 전시회 안내', body: '4학년 학생들의 한 학기 작업을 한자리에서 만나보세요. 일시 6/20~24, 장소 디자인관 1층 전시홀.', category: '행사', publishedAt: '2026-06-08T10:00:00+09:00', views: 1204, isImportant: false },
  { id: 'n4', deptId: 'me', title: '하계 계절학기 수강신청 일정', body: '계절학기 수강신청은 6월 12일 10시부터입니다.', category: '학사', publishedAt: '2026-06-07T09:00:00+09:00', views: 651, isImportant: false },
  { id: 'n5', deptId: 'biz-admin', title: '교환학생 프로그램 설명회 개최', body: '2026 가을학기 교환학생 파견 설명회를 개최합니다.', category: '행사', publishedAt: '2026-06-06T15:00:00+09:00', views: 430, isImportant: false },
  { id: 'n6', deptId: 'cse', title: 'SW 캡스톤 디자인 경진대회 모집', body: '4학년 대상 캡스톤 경진대회 참가팀을 모집합니다.', category: '행사', publishedAt: '2026-06-06T11:00:00+09:00', views: 388, isImportant: false },
  { id: 'n7', deptId: 'ee', title: '국가장학금 2차 신청 안내', body: '한국장학재단 국가장학금 2차 신청 기간입니다.', category: '장학', publishedAt: '2026-06-05T13:00:00+09:00', views: 997, isImportant: true },
  { id: 'n8', deptId: 'eng-lit', title: '원어민 회화 특강 수강생 모집', body: '여름방학 원어민 영어회화 특강 수강생을 모집합니다.', category: '학사', publishedAt: '2026-06-05T10:00:00+09:00', views: 271, isImportant: false },
  { id: 'n9', deptId: 'biz-admin', title: '대기업 채용설명회(삼성·LG) 안내', body: '취업지원센터 주관 대기업 채용설명회가 열립니다.', category: '취업', publishedAt: '2026-06-04T14:00:00+09:00', views: 1120, isImportant: false },
  { id: 'n10', deptId: 'acct', title: 'CPA 준비반 모집 공고', body: '회계학과 CPA 준비반 신규 기수를 모집합니다.', category: '취업', publishedAt: '2026-06-04T09:00:00+09:00', views: 540, isImportant: false },
  { id: 'n11', deptId: 'kor-lit', title: '인문학 콜로키엄 — 6월 특별강연', body: '6월 인문학 콜로키엄 특별강연을 안내드립니다.', category: '행사', publishedAt: '2026-06-03T16:00:00+09:00', views: 198, isImportant: false },
  { id: 'n12', deptId: 'econ', title: '경제학과 학술제 발표자 모집', body: '2026 경제학과 학술제 발표자를 모집합니다.', category: '행사', publishedAt: '2026-06-02T10:00:00+09:00', views: 233, isImportant: false },
  { id: 'n13', deptId: 'cse', title: '2026학년도 2학기 수강신청 사전 안내', body: '2학기 수강신청은 7월 14일부터 시작됩니다. 수강신청 포털에서 희망 과목을 미리 확인하세요.', category: '학사', publishedAt: '2026-06-08T07:30:00+09:00', views: 1480, isImportant: true },
  { id: 'n14', deptId: 'me', title: '기계공학과 우수 논문상 수상자 발표', body: '2026년 1학기 우수 논문상 수상자를 발표합니다. 수상자는 학과 홈페이지에서 확인 바랍니다.', category: '일반', publishedAt: '2026-06-07T16:00:00+09:00', views: 312, isImportant: false },
  { id: 'n15', deptId: 'trade', title: '무역학과 글로벌 인턴십 모집 공고', body: '해외 무역회사 인턴십 프로그램 참가자를 모집합니다. 지원기간: 6월 10일~20일.', category: '취업', publishedAt: '2026-06-07T14:30:00+09:00', views: 678, isImportant: false },
  { id: 'n16', deptId: 'ee', title: '전기공학과 실험실 안전교육 필수 이수 안내', body: '하계방학 전 실험실 안전교육을 필수로 이수해야 합니다. 미이수 시 실험실 출입이 제한됩니다.', category: '학사', publishedAt: '2026-06-07T11:00:00+09:00', views: 890, isImportant: true },
  { id: 'n17', deptId: 'biz-admin', title: '경영학과 스타트업 창업 지원 프로그램 모집', body: '교내 창업지원센터와 연계한 스타트업 지원 프로그램 참가팀을 모집합니다.', category: '행사', publishedAt: '2026-06-06T13:00:00+09:00', views: 456, isImportant: false },
  { id: 'n18', deptId: 'kor-lit', title: '국어국문학과 문학상 수상작 전시', body: '2026 국어국문학과 문학상 수상작 전시를 6월 15일부터 19일까지 인문관 로비에서 개최합니다.', category: '행사', publishedAt: '2026-06-06T09:30:00+09:00', views: 174, isImportant: false },
  { id: 'n19', deptId: 'acct', title: '세무사 자격시험 대비 특강 개설', body: '회계학과 학생 대상 세무사 자격시험 대비 특강을 7월 방학 중 개설합니다.', category: '취업', publishedAt: '2026-06-05T15:00:00+09:00', views: 485, isImportant: false },
  { id: 'n20', deptId: 'cloth', title: '의류학과 산학협력 패션 인턴십 모집', body: '국내 패션기업과의 산학협력 인턴십 참가자를 모집합니다. 지원서는 6월 16일까지 제출.', category: '취업', publishedAt: '2026-06-05T08:30:00+09:00', views: 601, isImportant: false },
  { id: 'n21', deptId: 'econ', title: '한국은행 경제 현장탐방 프로그램 참가자 모집', body: '한국은행 부산본부 주관 경제 현장탐방 프로그램에 경제학과 학생을 초청합니다.', category: '행사', publishedAt: '2026-06-04T16:00:00+09:00', views: 367, isImportant: false },
  { id: 'n22', deptId: 'eng-lit', title: '영어영문학과 졸업 요건 변경 안내', body: '2023학번부터 영어 공인 성적 제출이 졸업 요건에서 제외됩니다. 세부 사항은 학과 사무실에 문의 바랍니다.', category: '학사', publishedAt: '2026-06-04T10:00:00+09:00', views: 921, isImportant: true },
  { id: 'n23', deptId: 'cse', title: '컴퓨터공학과 동문 특강 — AI 스타트업 창업 이야기', body: '실리콘밸리 AI 스타트업을 창업한 동문의 특강을 6월 18일 오후 3시 공학관 102호에서 개최합니다.', category: '행사', publishedAt: '2026-06-03T14:00:00+09:00', views: 742, isImportant: false },
  { id: 'n24', deptId: 'me', title: '기계공학과 설계 경진대회 참가팀 모집', body: '창의 기계 설계 경진대회 참가팀을 모집합니다. 팀당 3~5인으로 구성.', category: '행사', publishedAt: '2026-06-03T11:00:00+09:00', views: 289, isImportant: false },
  { id: 'n25', deptId: 'trade', title: '2026학년도 1학기 성적 우수 장학생 선발 결과', body: '1학기 성적 우수 장학생 선발 결과를 발표합니다. 수혜자는 개별 통보 예정입니다.', category: '장학', publishedAt: '2026-06-03T09:00:00+09:00', views: 812, isImportant: false },
  { id: 'n26', deptId: 'ee', title: '전기전자 공학 학술대회 논문 초록 모집', body: '2026 전기전자공학 학술대회 논문 초록을 모집합니다. 제출 마감: 7월 5일.', category: '학사', publishedAt: '2026-06-02T15:00:00+09:00', views: 203, isImportant: false },
  { id: 'n27', deptId: 'biz-admin', title: '경영학과 해외 MBA 진학 설명회', body: '미국·유럽 주요 MBA 과정 진학 희망자 대상 설명회를 개최합니다. 일시: 6월 19일 오후 2시.', category: '행사', publishedAt: '2026-06-02T13:00:00+09:00', views: 355, isImportant: false },
  { id: 'n28', deptId: 'kor-lit', title: '국어국문학과 대학원 진학 설명회', body: '대학원 진학을 희망하는 학부생을 위한 설명회를 6월 17일 인문관 301호에서 개최합니다.', category: '일반', publishedAt: '2026-06-02T09:00:00+09:00', views: 148, isImportant: false },
]

export const deptName = (id: string) => departments.find(d => d.id === id)?.name ?? id
export const collegeName = (id: string) => colleges.find(c => c.id === id)?.name ?? id
export const deptsOfCollege = (collegeId: string) => departments.filter(d => d.collegeId === collegeId)
