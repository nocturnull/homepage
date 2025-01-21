export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            // Home
            'home.intro.title': 'Hi! My name is Marcos Daniel Arroyo',
            'home.intro.description': 'I\'m an American software engineer with 12 years of experience based out of Seoul, South Korea.',
            'home.work.onda.description': 'ONDA is a global hospitality tech company that provides cutting-edge distribution sales systems.',
            'home.work.onda.role': 'Senior Software Developer At ONDA [2019.05 – 2024.12]',
            'home.work.heartware-korea.description': 'The Marshall Goldsmith Stakeholder Centered Coaching® community is dedicated to supporting leaders to achieve positive, sustainable growth in their leadership effectiveness.',
            'home.work.heartware-korea.role': 'Lead Software Developer At Heartware Korea [2018.05 – 2018.12]',
            'home.work.cheritz.description': 'Sweet solutions for female gamers.',
            'home.work.cheritz.role': 'Lead Software Developer at Cheritz [2015.06 – 2018.04]',
            'home.work.kpop-united.description': 'The first crowdfunding platform for K-Pop Concerts. Krowdpop gives the fans the power to decide which cities their favorite K-pop artists visit.',
            'home.work.kpop-united.role': 'Lead Software Developer at KPOP United [2014.02 – 2015.05]',
            'home.skills.software-development': 'Proven track record of delivering high quality software. From games built with Unity to back end APIs written with Nest.js, Django, and Laravel.',
            'home.skills.web-development': 'Can convert Figma designs into responsive HTML5 compliant markup using the Sass 7-1 architecture pattern.',
            'home.skills.server-infrastructure': 'Capable of architecting back end cloud infrastructure using modern DevOps techniques with AWS.',
            'home.skills.team-leading': 'Have led teams with succesful product launches across several industries using Agile Development methodologies.',

            // Work / ONDA
            'work.onda.description': 'Senior Software Developer At ONDA [2019.01 – 2024.12]',
            'work.onda.project.1': 'Back Office',
            'work.onda.project.1.contents.1': 'Developed a comprehensive admin dashboard for managing property contents such as room types and rates across several software platforms. API written with Nest.js and the database was created with MySQL.',
            'work.onda.project.2': 'Notification Service',
            'work.onda.project.2.contents.1': 'Implemented a multi-protocol notification system consisting of Email, Fax, SMS, and Kakao notification services. Used AWS SES for emails, AWS SNS for international numbers and Ppurio for domestic numbers and fax. To support several internal dynamic services with varying business logic, a dynamic schema was implemented using MongoDB with REST and gRPC APIs exposed.',
            'work.onda.project.3': 'Google Hotel Booking Engine',
            'work.onda.project.3.contents.1': 'Led a team to be one of the first companies in South Korea to integrate Google Hotels into a hotel booking system. Created a booking engine client with Vue.js and led front end UI styling and compenent development. Architected a micro service backend with Google Hotels API integrated into one of the backend APIs using Nest.js with REST and GraphQL APIs exposed.',
            'work.onda.project.4': 'CMS (Channel Management System)',
            'work.onda.project.4.contents.1': 'Integrated Booking.com and Expedia APIs for a CMS (Channel Management System). Led the Expedia onboarding to become an official partner; which requires a rigorous testing phase directly with Expedia engineers. Certain Expedia APIs only support legacy SOAP request formats so an XML-JSON adapter was developed to match internal REST APIs',

            // Work / Heartware Korea
            'work.heartware-korea.description': 'Lead Software Developer At Heartware Korea [2018.05 – 2018.12]',
            'work.heartware-korea.project.1': 'Marshall Goldsmith Coach Platform',
            'work.heartware-korea.project.1.contents.1': 'Implemented an LMS (Learning Management System) for the Marshall Goldsmith Stakeholder Centered Coaching brand. Custom design implemented using Foundation and Sass. Backend service developed with Django and PostgreSQL.',
            'work.heartware-korea.project.1.contents.2': 'Supplied support for the existing infrastructure, which was in Wordpress, by creating custom plugins in PHP. Since Wordpress does not have developer friendly libraries a custom ORM was developed with models and query building that would dynamically create raw queries.',

            // Work / Cheritz
            'work.cheritz.description': 'Lead Software Developer at Cheritz [2015.06 – 2018.04]',
            'work.cheritz.project.1': 'The Ssum: Love from Today',
            'work.cheritz.project.1.contents.1': 'Led development for the first iteration of the mobile dating simulation game, The Ssum. Planned agile development team sprints using Jira and assigned and tracked work of junior developers.',
            'work.cheritz.project.2': 'Mystic Messenger',
            'work.cheritz.project.2.contents.1': 'Led development for Mystic Messenger using Unity, which won the 2017 Best Indie Game Award. Led backend infrastructure design and sole architect of the game and lead developer upon release. Made custom native implementations, such as an image picker, for iOS and Android builds. Implemented client side and server side game asset update feature.',
            'work.cheritz.project.2.contents.2': 'Game authentication API implemented with Flask using AWS Cognito and the data management API was integrated with AWS DynamoDB due to varying data schemas that came with each event and DLC. User data stored in a MySQL server and game assets stored on AWS S3 with a CloudFront endpoint with caching and invalidation to optimize downloads.',
            'work.cheritz.project.3': 'Company Websites',
            'work.cheritz.project.3.contents.1': 'Sole web developer for supporting game information sites using Laravel. Each game website had a custom design that was fully responsive and were implemented using Sass and Compass, no UI library nor framework. Web assets were minified and cached and hosted through AWS CloudFront for faster page loads.',

            // Work / KPOP United
            'work.kpop-united.description': 'Lead Software Developer at KPOP United [2014.02 – 2015.05]',
            'work.kpop-united.project.1': 'Krowdpop',
            'work.kpop-united.project.1.contents.1': 'Implemented Krowdpop; a real time ticketing system for a successful crowdsourced KPOP concert, Unite The Mike, which included popular artists Ailee, Jay Park, and San E. Due to the high traffic when tickets opened, a load balancer was used with AWS EB to keep the back end services scalable and responsive.',
            'work.kpop-united.project.1.contents.2': 'Implemented a voting system that was the backbone of the crowd sourcing platform which was developed with Laravel and data was stored in a MySQL AWS RDS server. Due to the complex statistical analysis required for the voting predictions, large queries were ran and cached ahead of time using a Redis server.',
            'work.kpop-united.project.1.contents.3': 'The payment system was integrated with Stripe and a custom email, using AWS SES, was sent out to users upon confirmation. Tickets were cached upon check out and managed on a Redis server and freed if not purchased within a given time frame. Notifications were also given to users on the site itself in real time using sockets from a node.js backend service.',
        },
        ko: {
            // Home
            'home.intro.title': '안녕하세요! 저는 마르코스라고 합니다.',
            'home.intro.description': '서울에 거주 중 미국 출신 12년차 소프트웨어 엔저니어입니다. 반갑습니다.',
            'home.work.onda.description': '숙박산업의 바른 내일을 제시하는 ONDA.',
            'home.work.onda.role': '시니어 개발자 [2019.05 – 2024.12]',
            'home.work.heartware-korea.description': '마셜 골드스미스(주)의 자회사, 리더십 코칭 솔루션 제작사.',
            'home.work.heartware-korea.role': '리드 개발자 [2018.05 – 2018.12]',
            'home.work.cheritz.description': '여성향 노멀 게임 제작사.',
            'home.work.cheritz.role': '개발 총괄 [2015.06 – 2018.04]',
            'home.work.kpop-united.description': 'K-POP이 전 세계적으로 퍼져나갈 수 있도록 도우며 한국 문화를 사랑해주 는 열정적인 KPOP UNITED.',
            'home.work.kpop-united.role': '리드 개발자 [2014.02 – 2015.05]',
            'home.skills.software-development': '다양한 산업의 백엔드 GraphQL, RESTful API를 설계 및 개발.',
            'home.skills.web-development': '웹과 모바일 UI 구성 및 디자인 퍼블리싱.',
            'home.skills.server-infrastructure': 'AWS 활용 하여 서비스의 DevOps 전반 인프라 구축.',
            'home.skills.team-leading': '기획, PM, 디자인 등 여러 팀과 소통하여 Sprint Planning 및 팀 리딩.',

            // Work / ONDA
            'work.onda.description': '시니어 개발자 [2019.05 – 2024.12]',
            'work.onda.project.1': '온다 백오피스',
            'work.onda.project.1.contents.1': '숙소 관리 및 운영 도구는 제공 하는 백오피스 서비스 개발 하였습니다. 기존 어드민 서비스를 분석 및 통합 어드민 API 설계 하였습니다. 사내 서비스 연동 및 예약, 숙소 콘텐츠 REST API 설계 하며 데이터베이스 분석 및 비지니스 로직을 구현 하였습니다.',
            'work.onda.project.2': '알림 서비스',
            'work.onda.project.2.contents.1': '다양한 프로토콜을 지원하는 알림 API를 개발 했으며 이메일, 팩스, 문자, 카카오 알림이 제공되도록 구축 하였습니다. 이메일은 AWS SES 이용 하며 팩스, 카카오, 국내 문자에 경우에는 뿌리오를 이용했는데 해외 문자의 경우에는 AWS SNS을 이용했습니다. 여러 서비스의 비즈니스 로직을 지원하기 위해 MongoDB를 이용 했습니다.',
            'work.onda.project.3': '구글호텔 전용 부킹엔진',
            'work.onda.project.3.contents.1': '국내 최초로 구글호텔과 공식 파트너십을 체결하여 서비스를 구축한 팀의 리더. 구글호텔 API와 자사 API를 연동하는 마이크로 서비스 아키텍처를 설계 하였습니다. 해당 부킹엔진은 Vue.js를 이용하여 구축하였고 Nest.js로 서비스를 구현하고 API에 REST와 GraphQL로 연동하였습니다. 또한 다국어 지원을 위해 커스텀 gettext vue 플러그인을 개발 하였습니다.',
            'work.onda.project.4': 'CMS (Channel Management System)',
            'work.onda.project.4.contents.1': 'CMS (Channel Management System) 개발 했으며 부킹닷컴과 엑스피디아의 API를 연동 했습니다. 엑스피디아의 SOAP API를 REST API로 변환하는 어댑터를 개발하는 등 엑스피디아의 공식 파트너가 되어 온보딩 허가를 취득하는 과정을 성공적으로 주도하였습니다.',

            // Work / Heartware Korea
            'work.heartware-korea.description': '리드 개발자 [2018.05 – 2018.12]',
            'work.heartware-korea.project.1': '마셜 골드스미스 코칭 플랫폼',
            'work.heartware-korea.project.1.contents.1': '마셜 골드스미스(주)를 위한 LMS (Learning Management System)를 개발 하였습니다. Foundation과 Sass을 활용 하여 커스텀 디자인을 퍼블리싱 했는데 Django와 PostgreSQL 이용 하여 API 개발 진행 하였습니다.',
            'work.heartware-korea.project.1.contents.2': '기존 Wordpress 서비스가 효율적으로 유지보수 될 수 있도록 커스텀 플러그인을 개발 하였고 유저 데이터 검색 및 필터링 기능을 간편화 하기 위해 자동 쿼리빌딩 기능이 탑재된 커스텀 ORM을 단독으로 개발 하였습니다.',

            // Work / Cheritz
            'work.cheritz.description': '개발 총괄 [2015.06 – 2018.04]',
            'work.cheritz.project.1': '더 썸:오늘부터 러브',
            'work.cheritz.project.1.contents.1': '유니티 활용 하여 ‘더썸’ 썸남과 계속 대화를 나누며 게임의 최초 버전 설계 및 구현. 개발 일정 planning 및 주니어 개발자에게 작업 배정 하였습니다.',
            'work.cheritz.project.2': '수상한 메신저',
            'work.cheritz.project.2.contents.1': '대한민국 게임대상 2017년의 인디게임상을’수상한 메신저’의 원제작자입니다. Flask를 활용 해서 API 구축부터 유니티 활용 하여 게임 구현 및 설계까지 주도하였습니다. 게임 리소스 업데이트 기능은 클라인트와 API 양쪽 개발 진행 했고 필요에 따라 native iOS 및 안드로이드 이미지 피커를 직접 구현 하였습니다.',
            'work.cheritz.project.2.contents.2': '유저인증 API는 AWS Cognito와 연동 하였고 게임 데이터 관리는 다양한 이벤트 변수 제공 해야 하기 때문에 AWS DynamoDB를 이용 하였습니다. 유저 관련 된 데이터를 MySQL 디비에 저장 되어 있으며 게임 리소스 파일은 AWS S3에 저장 되어 있었습니다. S3 버킷은 CloudFront로 배포했고 효율적인 데이터 통신을 위해 꼼꼼한 캐싱 및 cache invalidation 로직을 구현하였습니다.',
            'work.cheritz.project.3': '더 썸, 체리츠, 수상한 메신저 홈페이지',
            'work.cheritz.project.3.contents.1': '게임 정보 관한 홈페이지를 Laravel , sass과 compass 활용 해서 반응형으로 퍼블리싱 및 개발 하였습니다. 빠른 페이지 로딩을 위해 웹 리소스를 AWS S3 및 CloudFront 통해 관리 했습니다.',

            // Work / KPOP United
            'work.kpop-united.description': '리드 개발자 [2014.02 – 2015.05]',
            'work.kpop-united.project.1': 'Krowdpop',
            'work.kpop-united.project.1.contents.1': 'Crowd sourcing을 통해 KPOP 공연의 자금을 마련 하는 Krowdpop이라는 플렛폼의 개발팀 리더였습니다. 이 플렛폼에서 성공적으로 에일리, 박재범, 산이의 ‘Unite The Mic’ 공연을 개최 하였습니다. 티켓 예매 오픈 시기의 접속 부하에 대비하여 AWS ELB 로드 밸런싱 인프라를 세팅 하였습니다.',
            'work.kpop-united.project.1.contents.2': 'Crowd sourcing의 핵심인 투표 시스템을 구현 하였습니다. API는 Laravel으로 만들었고 데이터베이스는 AWS RDS MySQL을 활용하였습니다. 투표결과를 예상 및 분석하는 복잡한 알고리즘이 빠르게 처리되도록 배치함수로 개발하여 결과를 Redis 서버에 캐싱 했습니다.',
            'work.kpop-united.project.1.contents.3': '티켓 예매 기능을 구현했습니다. 결제 시스템은 Stripe PG를 사용했고 예매 성공 후 AWS SES로 확정 이메일이 전송되도록 구현하였습니다. 결제 진행 과정에서 선택 한 티켓이 Redis 서버에 캐시로 임시저장되고 결제 시간이 만료 된다면 티켓이 장바구니와 캐시에서 강력 제거되도록 하였습니다. ',
        }
    }
}))
