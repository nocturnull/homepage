export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            // Home
            'home.intro.title': 'Hi! My name is Marcos Daniel Arroyo',
            'home.intro.description': 'I\'m an American software engineer with 12 years of experience based out of Seoul, South Korea.',
            'home.work.onda.description': 'ONDA is a global hospitality tech company that provides cutting-edge distribution sales systems.',
            'home.work.heartware-korea.description': 'The Marshall Goldsmith Stakeholder Centered Coaching® community is dedicated to supporting leaders to achieve positive, sustainable growth in their leadership effectiveness.',
            'home.work.cheritz.description': 'Sweet solutions for female gamers.',
            'home.work.kpop-united.description': 'The first crowdfunding platform for K-Pop Concerts. Krowdpop gives the fans the power to decide which cities their favorite K-pop artists visit.',
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
            'work.heartware-korea.description': 'The Marshall Goldsmith Stakeholder Centered Coaching® community is dedicated to supporting leaders to achieve positive, sustainable growth in their leadership effectiveness.',
            'work.heartware-korea.contents1': 'Bacon ipsum dolor amet short loin filet mignon turducken jerky tri-tip beef ribs, kielbasa rump pastrami. Ribeye andouille chicken flank, porchetta kielbasa buffalo t-bone pork meatball capicola swine pig cupim chuck. Andouille ground round ham hock frankfurter beef, jerky rump biltong corned beef. Buffalo turkey filet mignon, kielbasa meatloaf shank landjaeger flank salami. Pork shank ribeye rump kevin.',
            'work.heartware-korea.contents2': 'Turducken tail cow leberkas, ribeye burgdoggen pig meatloaf biltong spare ribs ground round sirloin corned beef. Short ribs tail kevin, brisket sausage salami spare ribs sirloin swine leberkas pastrami ham. Doner flank fatback jowl. Hamburger spare ribs pig, rump shankle fatback tenderloin strip steak shank beef. Picanha jowl burgdoggen, landjaeger kielbasa venison turducken tri-tip chuck hamburger chislic andouille fatback. Shoulder filet mignon turkey, pork belly doner prosciutto turducken pork swine beef ground round bresaola.',

            // Work / Cheritz
            'work.cheritz.description': 'Sweet solutions for female gamers.',
            'work.cheritz.contents1': 'Bacon ipsum dolor amet short loin filet mignon turducken jerky tri-tip beef ribs, kielbasa rump pastrami. Ribeye andouille chicken flank, porchetta kielbasa buffalo t-bone pork meatball capicola swine pig cupim chuck. Andouille ground round ham hock frankfurter beef, jerky rump biltong corned beef. Buffalo turkey filet mignon, kielbasa meatloaf shank landjaeger flank salami. Pork shank ribeye rump kevin.',
            'work.cheritz.contents2': 'Turducken tail cow leberkas, ribeye burgdoggen pig meatloaf biltong spare ribs ground round sirloin corned beef. Short ribs tail kevin, brisket sausage salami spare ribs sirloin swine leberkas pastrami ham. Doner flank fatback jowl. Hamburger spare ribs pig, rump shankle fatback tenderloin strip steak shank beef. Picanha jowl burgdoggen, landjaeger kielbasa venison turducken tri-tip chuck hamburger chislic andouille fatback. Shoulder filet mignon turkey, pork belly doner prosciutto turducken pork swine beef ground round bresaola.',

            // Work / KPOP United
            'work.kpop-united.description': 'The first crowdfunding platform for K-Pop Concerts. Krowdpop gives the fans the power to decide which cities their favorite K-pop artists visit.',
            'work.kpop-united.contents1': 'Bacon ipsum dolor amet short loin filet mignon turducken jerky tri-tip beef ribs, kielbasa rump pastrami. Ribeye andouille chicken flank, porchetta kielbasa buffalo t-bone pork meatball capicola swine pig cupim chuck. Andouille ground round ham hock frankfurter beef, jerky rump biltong corned beef. Buffalo turkey filet mignon, kielbasa meatloaf shank landjaeger flank salami. Pork shank ribeye rump kevin.',
            'work.kpop-united.contents2': 'Turducken tail cow leberkas, ribeye burgdoggen pig meatloaf biltong spare ribs ground round sirloin corned beef. Short ribs tail kevin, brisket sausage salami spare ribs sirloin swine leberkas pastrami ham. Doner flank fatback jowl. Hamburger spare ribs pig, rump shankle fatback tenderloin strip steak shank beef. Picanha jowl burgdoggen, landjaeger kielbasa venison turducken tri-tip chuck hamburger chislic andouille fatback. Shoulder filet mignon turkey, pork belly doner prosciutto turducken pork swine beef ground round bresaola.',
        },
        ko: {
            // Home
            'home.intro.title': '안녕하세요! 저는 마르코스라고 합니다.',
            'home.intro.description': '서울에 거주 중 미국 출신 12년차 서프트웨어 엔저니어입니다. 반갑습니다.',
            'home.work.onda.description': '숙박산업의 바른 내일을 제시하는 ONDA.',
            'home.work.heartware-korea.description': '마셜 골드스미스(주)의 자회사, 리더십 코칭 솔루션 제작사.',
            'home.work.cheritz.description': '여성향 노멀 게임 제작사.',
            'home.work.kpop-united.description': 'K-POP이 전 세계적으로 퍼져나갈 수 있도록 도우며 한국 문화를 사랑해주 는 열정적인 KPOP UNITED.',
            'home.skills.software-development': '다양한 산업의 백엔드 GraphQL, RESTful API를 설계 및 개발.',
            'home.skills.web-development': '웹과 모바일 UI 구성 및 디자인 퍼블리싱.',
            'home.skills.server-infrastructure': 'AWS 활용 하여 서비스의 DevOps 전반 인프라 구축.',
            'home.skills.team-leading': '기획, PM, 디자인 등 여러 팀과 소통하여 Sprint Planning 및 팀 리딩.',

            // Work / ONDA
            'work.onda.description': '시니어 개발자 [2019.01 – 2024.12]',
            'work.onda.project.1': '온다 백오피스',
            'work.onda.project.1.contents.1': '숙소 관리 및 운영 도구는 제공 하는 백오피스 서비스 개발 하였습니다. 기존 어드민 서비스를 분석 및 통합 어드민 API 설계 하였습니다. 사내 서비스 연동 및 예약, 숙소 콘텐츠 REST API 설계 하며 데이터베이스 분석 및 비지니스 로직을 구현 하였습니다.',
            'work.onda.project.2': '알림 서비스',
            'work.onda.project.2.contents.1': '다양한 프로토콜을 지원하는 알림 API를 개발 했으며 이메일, 팩스, 문자, 카카오 알림이 제공되도록 구축 하였습니다. 이메일은 AWS SES 이용 하며 팩스, 카카오, 국내 문자에 경우에는 뿌리오를 이용했는데 해외 문자의 경우에는 AWS SNS을 이용했습니다. 여러 서비스의 비즈니스 로직을 지원하기 위해 MongoDB를 이용 했습니다.',
            'work.onda.project.3': '구글호텔 전용 부킹엔진',
            'work.onda.project.3.contents.1': '국내 최초로 구글호텔과 공식 파트너십을 체결하여 서비스를 구축한 팀의 리더. 구글호텔 API와 자사 API를 연동하는 마이크로 서비스 아키텍처를 설계 하였습니다. 해당 부킹엔진은 Vue.js를 이용하여 구축하였고 Nest.js로 서비스를 구현하고 API에 REST와 GraphQL로 연동하였습니다. 또한 다국어 지원을 위해 커스텀 gettext vue 플러그인을 개발 하였습니다.',
            'work.onda.project.4': 'CMS (Channel Management System)',
            'work.onda.project.4.contents.1': 'CMS (Channel Management System) 개발 했으며 부킹닷컴과 엑스피디아의 API를 연동 했습니다. 엑스피디아의 SOAP API를 REST API로 변환하는 어댑터를 개발하는 등 엑스피디아의 공식 파트너가 되어 온보딩 허가를 취득하는 과정을 성공적으로 주도하였습니다.',

            // Work / Heartware Korea
            'work.heartware-korea.description': '마셜 골드스미스(주)의 자회사, 리더십 코칭 솔루션 제작사.',
            'work.heartware-korea.contents1': '언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.',
            'work.heartware-korea.contents2': '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 국가는 평생교육을 진흥하여야 한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.',

            // Work / Cheritz
            'work.cheritz.description': '여성향 노멀 게임 제작사.',
            'work.cheritz.contents1': '언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.',
            'work.cheritz.contents2': '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 국가는 평생교육을 진흥하여야 한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.',

            // Work / KPOP United
            'work.kpop-united.description': 'K-POP이 전 세계적으로 퍼져나갈 수 있도록 도우며 한국 문화를 사랑해주 는 열정적인 KPOP UNITED.',
            'work.kpop-united.contents1': '언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.',
            'work.kpop-united.contents2': '대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 국가는 평생교육을 진흥하여야 한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다.',
        }
    }
}))
