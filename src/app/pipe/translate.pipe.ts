import {Pipe, PipeTransform} from "@angular/core";
import {LANG_KEY} from "../data/data.constant";

@Pipe({
  name: 'translate',
  standalone: true
})
export class TranslatePipe implements PipeTransform {
  transform(key: string, ...args: any[]) {
    // @ts-ignore
    return this.t[key] || key;
  }

  get t() {
    return JSON.parse(<string>localStorage.getItem(LANG_KEY)) === 'vi'
      ? {
        // PERSONAL_INFO
        name_key: 'Họ và tên',
        name_value: 'Nguyễn Minh Lượng',
        date_of_birth: 'Ngày sinh',
        phone_number_key: 'Số điện thoại',
        address_key: 'Địa chỉ',
        address_value: 'Hà Nội, Việt Nam',
        education_level_key: 'Trình độ học vấn',
        education_level_value: 'Kỹ sư công nghệ thông tin - Đại học Giao thông Vận tải',
        english_key: 'Trình độ tiếng Anh',
        english_value: 'Nghe nói đọc viết cơ bản',
        // PERSONAL_INFO

        // EXPERIENCE
        ex_period3: '8/2025 - Nay',
        ex_company3: 'Ngân hàng TMCP Bảo Việt',
        ex_role3: 'Chuyên viên phát triển phần mềm',
        ex_description3: 'Tham gia phát triển và bảo trì hệ thống Core Banking, nâng cấp bảo mật hệ thống,...',

        ex_period2: '8/2023 - 8/2025',
        ex_company2: 'Tổng Công ty Giải pháp Doanh nghiệp Viettel',
        ex_role2: 'Kỹ sư phát trển phần mềm',
        ex_description2: 'Tham gia xây dựng các dự án chuyển đổi số cho chính phủ và doanh nghiệp lớn: hệ thống CSDL đất đai quốc gia, hệ thống CSDL dầu khí quốc gia.',

        ex_period1: '2020 - 2024',
        ex_company1: 'Đại học Giao thông Vận tải',
        ex_role1: 'Sinh viên',
        ex_description1: 'Tốt nghiệp loại Khá, chuyên ngành Công nghệ thông tin.',
        // EXPERIENCE

        // SKILLS
        backend_skills_title: 'Kỹ năng Backend',
        frontend_skills_title: 'Kỹ năng Frontend',
        other_skills_title: 'Kỹ năng khác',
        // SKILLS

        // COMMON
        role: 'Kỹ sư phát triển phần mềm',
        about_title: 'Về tôi & Định hướng',
        about: 'Tôi là một lập trình viên định hướng phát triển lâu dài trong lĩnh vực công nghệ phần mềm. Tôi có nền tảng lập trình Java, hiểu rõ quy trình phát triển phần mềm và luôn chú trọng đến chất lượng, hiệu năng và khả năng mở rộng của hệ thống. Mục tiêu của tôi là trở thành một kỹ sư phần mềm có khả năng thiết kế và xây dựng các hệ thống ổn định, đáp ứng tốt nhu cầu thực tế của doanh nghiệp.',
        career_path: 'quá trình công tác',
        contact_info: 'Thông tin liên hệ',
        challenge: 'Thách thức',
        solution: 'Giải pháp thực hiện',
        result: 'Kết quả đạt được',
        featured: 'Nổi bật',
        // COMMON

        // PROJECTS
        project_header: 'Dự án tham gia',
        project_others: 'Các dự án khác',
        project_name_1: 'Cơ sở dữ liệu đất đai quốc gia',
        project_description_1: 'Chuyển đổi số thủ tục hành chính đất đai. Đồng bộ cơ sở dữ liệu quốc gia.',
        project_overview_1: 'Dự án xây dựng hệ thống cơ sở dữ liệu đất đai quốc gia nhằm số hóa và đồng bộ hóa thông tin đất đai trên toàn quốc, giúp cải thiện hiệu quả quản lý và tra cứu thông tin đất đai cho các cơ quan nhà nước và người dân.',
        pr1_issue_1:
          `<strong>Khi đồng bộ dữ liệu từ 63 tỉnh thành về 1 CSDL duy nhất (Trung tâm Dữ liệu quốc gia), gặp vấn đề về trung lặp ID</strong>
        <ul class="text-lg">
          <li><strong>1.</strong> Cần có lưu lại 1 ID cũ là duy nhất ở mỗi bản ghi mới được lưu để thực hiệu đối soát, kiểu tra tính đúng đắn của dữ liệu</li>
          <li><strong>2.</strong> Việc kiểm tra trùng ID đối với mỗi bản ghi là tốn thời gian</li>
          <li><strong>3.</strong> Việc đồng bộ dữ liệu từ nhiều CSDL khác nhau, việc trùng lặp ID ở mỗi bản ghi là chắc chắn xảy ra</li>
        </ul>`,
        pr1_solution_1:
        `<ul>
            <li><strong>1.</strong> Mỗi ID dữ liệu của tỉnh, gắn kèm theo mã tỉnh <i>(giải quyết được vấn đề 1, 3)</i></li>
            <li><strong>2.</strong> Từ ID đã gắn kèm mã tỉnh, tạo ra UUID mới từ ID đó -> không cần thực hiện việc check trùng, update. Chỉ cần Insert vì theo hành vi mặc định của OracleSQL, khi insert 2 bản ghi trùng ID, nó sẻ tự update <i>(giải quyết được vấn đề 2)</i></li>
        </ul>
        `,
        pr1_benefit_1: 'Giải quyết được các vấn đề ban đầu đề ra, đồng thời tốc độ xử lý mỗi request tăng gấp đôi, vì không cần thực hiện hành vi check trùng ID cũ, update',
        pr1_issue_2:
          `<strong>Với yêu cầu nghiệp vụ, mỗi request cần xử lý và lưu trữ hàng triệu (khoảng 500.000 - 2.000.000) bản ghi. Việc sử dụng saveAll() + batch + flush/clear vẫn rất không lý tưởng</strong>
          <ul class="text-lg">
            <li><strong>THỜI GIAN:</strong> Với cấu hình máy server (cấu hình mạnh) vẫn mất rất nhiều thời gian để xử lý (5 - 15 phút)</li>
            <li><strong>TÀI NGUYÊN:</strong> Với sự quản lý Entity của JPA và việc xử lý hàng triệu bản ghi cùng lúc, Server chịu áp lực RAM cực lớn (2 - 3GB) mỗi request. Ngoài ra có nguy cơ lỗi OutOfMemmoryError</li>
          </ul>
          `,
        pr1_solution_2:
          `
          <strong>Sử dụng JDBC thay vì JPA để thực hiện việc Insert hàng loạt bản ghi</strong>
          <ul>
            <li><strong>THỜI GIAN:</strong> Tăng tốc độ xử lý mỗi request (thay vì phải trải qua nhiều bước của JPA như EntityManager, Persistence Context,...)</li>
            <li><strong>TÀI NGUYÊN:</strong> Giảm thiểu việc quản lý Entity của JPA, giảm áp lực RAM cho server</li>
          </ul>
          `,
        pr1_benefit_2: 'Thời gian xử lý mỗi request giảm từ <strong>5 - 15 phút</strong> xuống còn <strong>40 - 120 giây</strong>. Giảm áp lực RAM cho server, tránh được lỗi <strong>OutOfMemmoryError</strong> khi xử lý nhiều bản ghi',
        pr1_issue_3:
          `<strong>Đồng bộ 63 cơ sở dữ liệu</strong>
          <ul class="text-lg">
            <li><strong>1.</strong> Dự án sử dụng multi tenant: 63 Database cho 63 Tỉnh thành -> cần đồng bộ 63 Database</li>
            <li><strong>2.</strong> Cần đồng bộ CSDL giữa các môi trường: DEV -> TEST -> STAGING -> PRODUCTION</li>
            <li><strong>3.</strong> Khi cần cập nhật 1 trường dữ liệu, index, procedure, view, function, table, phải chạy lệnh SQL cho 63 DB, các môi trường khác nhau là tốn kém và không khả thi.</li>
            <li><strong>4.</strong> Giữa các môi trường, Code và Database không đồng nhất: Khi check lỗi product, hay phải quan tâm đến "product đã cập nhật procedure mới hay chưa" -> cần đồng nhất Version giữa Source và Database</li>
          </ul>
          `,
        pr1_solution_3:
          `<strong>Tích hợp công cụ Linquibase và ứng duụng JAVA</strong>
          <ul>
            <li><strong>1.</strong> Mỗi khi cần thay đổi CSDL, chỉ cần thêm các câu lệnh sql vào file changelog (trong source code)</li>
            <li><strong>2.</strong> Mỗi khi khởi động ứng dụng, Linquibase sẽ biết những câu lệnh SQL nào là mới dựa vào file changelog, nó sẽ apply các câu lệnh SQL mới đó vào CSDL trên môi trường chạy ứng dụng</li>
          </ul>
          `,
        pr1_benefit_3: 'Tối ưu quy trình check, fix lỗi trên các môi trường khác nhau. Giảm thiểu lỗi về phiên bản CSDL, code không đang có. Cải thiện thời gian làm việc.',

        project_name_2: 'Cơ sở dữ liệu dầu khí quốc gia',
        project_overview_2: 'Dự án xây dựng hệ thống quản lý thông tin các mỏ dầu khí tại Việt Nam, nhằm tối ưu hóa việc quản lý và khai thác tài nguyên dầu khí.',
        project_description_2: 'Xây dựng ứng dụng quả lý thông tin các mỏ dầu khí Việt Nam.',
        pr2_issue_1:
        `Ứng dụng frontend được cùng phát triển bởi nhiều team độc lập, vấn đề quản lý version source code trở nên khó khăn nếu vẫn sử dụng kiến trúc monorepo truyền thống`,
        pr2_solution_1:
        `Sử dụng kiến trúc Micro Frontend, mỗi team phát triển một module riêng biệt, có repository riêng. Sử dụng Module Federation của Webpack để tích hợp các module lại với nhau thành một ứng dụng hoàn chỉnh.`,
        pr2_benefit_1:
        `Giải quyết được vấn đề quản lý version source code, mỗi team có thể phát triển và deploy module của mình một cách độc lập mà không ảnh hưởng đến các team khác.`,

        project_name_3: 'Hệ thống Core Banking',
        project_overview_3: 'Dự án xây dựng và duy trì hệ thống Core Banking cho Ngân hàng TMCP Bảo Việt, đảm bảo hoạt động ổn định và an toàn cho các giao dịch tài chính.',
        project_description_3: 'Tham gia phát triển và bảo trì hệ thống Core Banking, nâng cấp bảo mật hệ thống,...',
        pr3_issue_1:
        `Trước bối cảnh gia tăng các mối đe dọa an ninh mạng, hệ thống T24 Gateway cần được nâng cấp để đảm bảo an toàn thông tin và bảo vệ dữ liệu khách hàng.`,
        pr3_solution_1:
        `Tạo chữ ký số (Digital Signature) cho các thông điệp SOAP gửi từ hệ thống T24 Gateway đến các hệ thống bên ngoài. Sử dụng thuật toán mã hóa RSA với khóa 2048 bit để đảm bảo tính bảo mật và toàn vẹn của dữ liệu.`,
        pr3_benefit_1:
        `Nâng cao mức độ bảo mật cho hệ thống T24 Gateway, giảm thiểu rủi ro bị tấn công mạng và bảo vệ thông tin khách hàng một cách hiệu quả.`,
        // PROJECTS

        heroTitle: 'Xây dựng hệ thống backend ổn định, bảo mật & mở rộng',
        timeline: 'Lộ trình sự nghiệp',
        skills: 'Công nghệ & Kỹ năng'
      }
      : {
        // PERSONAL_INFO
        name_key: 'Full Name',
        name_value: 'Nguyen Minh Luong',
        date_of_birth: 'Date of Birth',
        phone_number_key: 'Phone Number',
        address_key: 'Address',
        address_value: 'Hanoi, Vietnam',
        education_level_key: 'Education Level',
        education_level_value: 'Bachelor of Information Technology - University of Transport and Communications',
        english_key: 'English Proficiency',
        english_value: 'Basic in Listening, Speaking, Reading and Writing',
        // PERSONAL_INFO

        // EXPERIENCE
        ex_period3: '8/2025 - Now',
        ex_company3: 'Bao Viet Joint Stock Commercial Bank',
        ex_role3: 'Software Engineer',
        ex_description3: 'Participated in developing and maintaining Core Banking system, upgrading system security,...',

        ex_period2: '8/2023 - 8/2025',
        ex_company2: 'Viettel Solutions',
        ex_role2: 'Software Engineer',
        ex_description2: 'Involved in building digital transformation projects for government and large enterprises: Vietnam National Land Information System, Vietnam national oil and gas information system.',

        ex_period1: '2020 - 2024',
        ex_company1: 'University of Transport and Communications',
        ex_role1: 'Student',
        ex_description1: 'Graduated with Good honor, majoring in Information Technology.',
        // EXPERIENCE

        // SKILLS
        backend_skills_title: 'Backend Skills',
        frontend_skills_title: 'Frontend Skills',
        other_skills_title: 'Other Skills',
        // SKILLS

        // COMMON
        role: 'Software Engineer',
        about_title: 'About Me & My Goal',
        about: 'I am a software developer with a long-term career orientation in the field of software engineering. I have a solid foundation in Java programming, a clear understanding of the software development lifecycle, and always place strong emphasis on system quality, performance, and scalability. My goal is to become a software engineer capable of designing and building stable systems that effectively meet real-world business needs.',
        career_path: 'Career path',
        contact_info: 'Contact Information',
        challenge: 'Issue',
        solution: 'Solution',
        result: 'Benefit',
        featured: 'Featured',
        // COMMON

        // PROJECTS
        project_header: 'Projects involved',
        project_others: 'Other projects',
        project_name_1: 'Vietnam National Land Information System',
        project_description_1: 'Digital transformation of land administration procedures. Synchronizing national database.',
        project_overview_1: 'The project aims to build a national land information database system to digitize and synchronize land information nationwide, improving the efficiency of land management and information retrieval for government agencies and citizens.',
        pr1_issue_1:
          `<strong>When synchronizing data from 63 provinces into a single database (National Data Center), there is an issue of duplicate IDs</strong>
        <ul class="text-lg">
          <li><strong>1.</strong> It is necessary to retain a unique old ID for each new record to perform reconciliation and data validation</li>
          <li><strong>2.</strong> Checking for duplicate IDs for each record is time-consuming</li>
          <li><strong>3.</strong> When synchronizing data from multiple different databases, ID duplication for each record is inevitable</li>
        </ul>`,
        pr1_solution_1:
        `<ul>
            <li><strong>1.</strong> Each province's data ID is appended with the province code <i>(solving issues 1 and 3)</i></li>
            <li><strong>2.</strong> From the ID with the appended province code, generate a new UUID from that ID -> no need to check for duplicates or update. Just Insert because, by default behavior of OracleSQL, when inserting 2 records with the same ID, it will automatically update <i>(solving issue 2)</i></li>
        </ul>
        `,
        pr1_benefit_1: 'Resolved the initial issues, and the processing speed for each request doubled, as there was no need to check for old duplicate IDs and update them.',
        pr1_issue_2:
          `<strong>With business requirements, each request needs to process and store millions (about 500,000 - 2,000,000) of records. Using saveAll() + batch + flush/clear is still not ideal</strong>
          <ul class="text-lg">
            <li><strong>TIME:</strong> Even with a strong server configuration, it still takes a long time to process (5 - 15 minutes)</li>
            <li><strong>RESOURCES:</strong> With JPA's Entity management and processing millions of records at once, the server endures extreme RAM pressure (2 - 3GB) per request. There is also a risk of OutOfMemoryError.</li>
          </ul>
          `,
        pr1_solution_2:
          `
          <strong>Use JDBC instead of JPA to perform bulk record insertion</strong>
          <ul>
            <li><strong>TIME:</strong> Speed up the processing time for each request (instead of going through multiple JPA steps like EntityManager, Persistence Context,...)</li>
            <li><strong>RESOURCES:</strong> Minimize JPA's Entity management, reducing RAM pressure on the server</li>
          </ul>
          `,
        pr1_benefit_2: 'The processing time for each request reduced from <strong>5 - 15 minutes</strong> to <strong>40 - 120 seconds</strong>. Reduced RAM pressure on the server, avoiding <strong>OutOfMemoryError</strong> when processing many records.',
        pr1_issue_3:
          `<strong>Synchronizing 63 databases</strong>
          <ul class="text-lg">
            <li><strong>1.</strong> The project uses multi-tenant: 63 Databases for 63 Provinces -> need to synchronize 63 Databases</li>
            <li><strong>2.</strong> Need to synchronize databases between environments: DEV -> TEST -> STAGING -> PRODUCTION</li>
            <li><strong>3.</strong> When needing to update a data field, index, procedure, view, function, table, SQL commands must be run for 63 DBs across different environments, which is costly and impractical.</li>
            <li><strong>4.</strong> Between environments, Code and Database are not consistent: When checking product errors, one has to care about "whether the product has updated the new procedure or not" -> need to synchronize Version between Source and Database</li>
          </ul>
          `,
        pr1_solution_3:
          `<strong>Integrate Linquibase tool with JAVA application</strong>
          <ul>
            <li><strong>1.</strong> Whenever there is a need to change the database, just add SQL statements to the changelog file (in the source code)</li>
            <li><strong>2.</strong> Whenever the application starts, Linquibase will know which SQL statements are new based on the changelog file, and it will apply those new SQL statements to the database in the environment where the application is running</li>
          </ul>
          `,
        pr1_benefit_3: 'Optimized the process of checking and fixing errors across different environments. Minimized errors related to inconsistent database and code versions. Improved working time.',

        project_name_2: 'Vietnam national oil and gas information system',
        project_description_2: 'Building an application to manage information of oil and gas fields in Vietnam.',
        project_overview_2: 'The project aims to build a management system for oil and gas fields in Vietnam, optimizing the management and exploitation of oil and gas resources.',
        pr2_issue_1:
        `The frontend application is developed by multiple independent teams, making version source code management difficult if still using traditional monorepo architecture.`,
        pr2_solution_1:
        `Using Micro Frontend architecture, each team develops a separate module with its own repository. Using Webpack's Module Federation to integrate the modules into a complete application.`,
        pr2_benefit_1:
        `Solved the issue of source code version management, allowing each team to independently develop and deploy their module without affecting other teams.`,

        project_name_3: 'Core Banking System',
        project_description_3: 'Participated in developing and maintaining Core Banking system, upgrading system security,...',
        project_overview_3: 'The project involves building and maintaining the Core Banking system for Bao Viet Joint Stock Commercial Bank, ensuring stable and secure operations for financial transactions.',
        pr3_issue_1:
        `In the context of increasing cyber threats, the T24 Gateway system needs to be upgraded to ensure information security and protect customer data.`,
        pr3_solution_1:
        `Create a Digital Signature for SOAP messages sent from the T24 Gateway system to external systems. Use RSA encryption algorithm with 2048-bit keys to ensure data security and integrity.`,
        pr3_benefit_1:
        `Enhanced security level for the T24 Gateway system, minimizing the risk of cyber attacks and effectively protecting customer information.`,
        // PROJECTS
      };
  }
}
