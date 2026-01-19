import {LanguageI} from "../interfaces/LanguageI.interface";

export const PROJECT_LANG: LanguageI[] = [
  {key: 'project_header', vi: 'Dự án tham gia', en: 'Projects involved'},
  {key: 'project_others', vi: 'Các dự án khác', en: 'Other projects'},
  {key: 'project_name_1', vi: 'Cơ sở dữ liệu đất đai quốc gia', en: 'Vietnam National Land Information System'},
  {
    key: 'project_description_1',
    vi: 'Chuyển đổi số thủ tục hành chính đất đai. Đồng bộ cơ sở dữ liệu quốc gia.',
    en: 'Digital transformation of land administration procedures. Synchronizing national database.'
  },
  {
    key: 'project_overview_1',
    vi: 'Dự án xây dựng hệ thống cơ sở dữ liệu đất đai quốc gia nhằm số hóa và đồng bộ hóa thông tin đất đai trên toàn quốc, giúp cải thiện hiệu quả quản lý và tra cứu thông tin đất đai cho các cơ quan nhà nước và người dân.',
    en: 'The project aims to build a national land information database system to digitize and synchronize land information nationwide, improving the efficiency of land management and information retrieval for government agencies and citizens.'
  },
  {
    key: 'pr1_issue_1',
    vi:
      `<strong>Khi đồng bộ dữ liệu từ 63 tỉnh thành về 1 CSDL duy nhất (Trung tâm Dữ liệu quốc gia), gặp vấn đề về trung lặp ID</strong>
        <ul class="text-lg">
          <li><strong>1.</strong> Cần có lưu lại 1 ID cũ là duy nhất ở mỗi bản ghi mới được lưu để thực hiệu đối soát, kiểu tra tính đúng đắn của dữ liệu</li>
          <li><strong>2.</strong> Việc kiểm tra trùng ID đối với mỗi bản ghi là tốn thời gian</li>
          <li><strong>3.</strong> Việc đồng bộ dữ liệu từ nhiều CSDL khác nhau, việc trùng lặp ID ở mỗi bản ghi là chắc chắn xảy ra</li>
        </ul>`,
    en:
      `<strong>When synchronizing data from 63 provinces into a single database (National Data Center), there is an issue of duplicate IDs</strong>
        <ul class="text-lg">
          <li><strong>1.</strong> It is necessary to retain a unique old ID for each new record to perform reconciliation and data validation</li>
          <li><strong>2.</strong> Checking for duplicate IDs for each record is time-consuming</li>
          <li><strong>3.</strong> When synchronizing data from multiple different databases, ID duplication for each record is inevitable</li>
        </ul>`
  },
  {
    key: 'pr1_solution_1',
    vi:
      `<ul>
           <li><strong>1.</strong> Mỗi ID dữ liệu của tỉnh, gắn kèm theo mã tỉnh <i>(giải quyết được vấn đề 1, 3)</i></li>
           <li><strong>2.</strong> Từ ID đã gắn kèm mã tỉnh, tạo ra UUID mới từ ID đó -> không cần thực hiện việc check trùng, update. Chỉ cần Insert vì theo hành vi mặc định của OracleSQL, khi insert 2 bản ghi trùng ID, nó sẻ tự update <i>(giải quyết được vấn đề 2)</i></li>
       </ul>`,
    en:
      `<ul>
           <li><strong>1.</strong> Each province's data ID is appended with the province code <i>(solving issues 1 and 3)</i></li>
           <li><strong>2.</strong> From the ID with the appended province code, generate a new UUID from that ID -> no need to check for duplicates or update. Just Insert because, by default behavior of OracleSQL, when inserting 2 records with the same ID, it will automatically update <i>(solving issue 2)</i></li>
       </ul>`
  },
  {
    key: 'pr1_benefit_1',
    vi: 'Giải quyết được các vấn đề ban đầu đề ra, đồng thời tốc độ xử lý mỗi request tăng gấp đôi, vì không cần thực hiện hành vi check trùng ID cũ, update',
    en: 'Resolved the initial issues, and the processing speed for each request doubled, as there was no need to check for old duplicate IDs and update them.'
  },
  {
    key: 'pr1_issue_2',
    vi:
      `<strong>Với yêu cầu nghiệp vụ, mỗi request cần xử lý và lưu trữ hàng triệu (khoảng 500.000 - 2.000.000) bản ghi. Việc sử dụng saveAll() + batch + flush/clear vẫn rất không lý tưởng</strong>
       <ul class="text-lg">
           <li><strong>THỜI GIAN:</strong> Với cấu hình máy server (cấu hình mạnh) vẫn mất rất nhiều thời gian để xử lý (5 - 15 phút)</li>
           <li><strong>TÀI NGUYÊN:</strong> Với sự quản lý Entity của JPA và việc xử lý hàng triệu bản ghi cùng lúc, Server chịu áp lực RAM cực lớn (2 - 3GB) mỗi request. Ngoài ra có nguy cơ lỗi OutOfMemmoryError</li>
       </ul>`
    , en:
      `<strong>With business requirements, each request needs to process and store millions (about 500,000 - 2,000,000) of records. Using saveAll() + batch + flush/clear is still not ideal</strong>
       <ul class="text-lg">
           <li><strong>TIME:</strong> Even with a strong server configuration, it still takes a long time to process (5 - 15 minutes)</li>
           <li><strong>RESOURCES:</strong> With JPA's Entity management and processing millions of records at once, the server endures extreme RAM pressure (2 - 3GB) per request. There is also a risk of OutOfMemoryError.</li>
       </ul>`
  },
  {
    key: 'pr1_solution_2',
    vi:
      `<strong>Với yêu cầu nghiệp vụ, mỗi request cần xử lý và lưu trữ hàng triệu (khoảng 500.000 - 2.000.000) bản ghi. Việc sử dụng saveAll() + batch + flush/clear vẫn rất không lý tưởng</strong>
          <ul class="text-lg">
            <li><strong>THỜI GIAN:</strong> Với cấu hình máy server (cấu hình mạnh) vẫn mất rất nhiều thời gian để xử lý (5 - 15 phút)</li>
            <li><strong>TÀI NGUYÊN:</strong> Với sự quản lý Entity của JPA và việc xử lý hàng triệu bản ghi cùng lúc, Server chịu áp lực RAM cực lớn (2 - 3GB) mỗi request. Ngoài ra có nguy cơ lỗi OutOfMemmoryError</li>
          </ul>`
    , en:
      `<strong>Use JDBC instead of JPA to perform bulk record insertion</strong>
          <ul>
            <li><strong>TIME:</strong> Speed up the processing time for each request (instead of going through multiple JPA steps like EntityManager, Persistence Context,...)</li>
            <li><strong>RESOURCES:</strong> Minimize JPA's Entity management, reducing RAM pressure on the server</li>
          </ul>`
  },
  {
    key: 'pr1_benefit_2',
    vi: 'Thời gian xử lý mỗi request giảm từ <strong>5 - 15 phút</strong> xuống còn <strong>40 - 120 giây</strong>. Giảm áp lực RAM cho server, tránh được lỗi <strong>OutOfMemmoryError</strong> khi xử lý nhiều bản ghi',
    en: 'The processing time for each request reduced from <strong>5 - 15 minutes</strong> to <strong>40 - 120 seconds</strong>. Reduced RAM pressure on the server, avoiding <strong>OutOfMemoryError</strong> when processing many records.'
  },
  {
    key: 'pr1_issue_3',
    vi:
      `<strong>Đồng bộ 63 cơ sở dữ liệu</strong>
          <ul class="text-lg">
            <li><strong>1.</strong> Dự án sử dụng multi tenant: 63 Database cho 63 Tỉnh thành -> cần đồng bộ 63 Database</li>
            <li><strong>2.</strong> Cần đồng bộ CSDL giữa các môi trường: DEV -> TEST -> STAGING -> PRODUCTION</li>
            <li><strong>3.</strong> Khi cần cập nhật 1 trường dữ liệu, index, procedure, view, function, table, phải chạy lệnh SQL cho 63 DB, các môi trường khác nhau là tốn kém và không khả thi.</li>
            <li><strong>4.</strong> Giữa các môi trường, Code và Database không đồng nhất: Khi check lỗi product, hay phải quan tâm đến "product đã cập nhật procedure mới hay chưa" -> cần đồng nhất Version giữa Source và Database</li>
          </ul>`
    ,
    en:
      `<strong>Synchronizing 63 databases</strong>
          <ul class="text-lg">
            <li><strong>1.</strong> The project uses multi-tenant: 63 Databases for 63 Provinces -> need to synchronize 63 Databases</li>
            <li><strong>2.</strong> Need to synchronize databases between environments: DEV -> TEST -> STAGING -> PRODUCTION</li>
            <li><strong>3.</strong> When needing to update a data field, index, procedure, view, function, table, SQL commands must be run for 63 DBs across different environments, which is costly and impractical.</li>
            <li><strong>4.</strong> Between environments, Code and Database are not consistent: When checking product errors, one has to care about "whether the product has updated the new procedure or not" -> need to synchronize Version between Source and Database</li>
          </ul>`
  },
  {
    key: 'pr1_solution_3',
    vi:
      `<strong>Tích hợp công cụ Linquibase và ứng duụng JAVA</strong>
          <ul>
            <li><strong>1.</strong> Mỗi khi cần thay đổi CSDL, chỉ cần thêm các câu lệnh sql vào file changelog (trong source code)</li>
            <li><strong>2.</strong> Mỗi khi khởi động ứng dụng, Linquibase sẽ biết những câu lệnh SQL nào là mới dựa vào file changelog, nó sẽ apply các câu lệnh SQL mới đó vào CSDL trên môi trường chạy ứng dụng</li>
          </ul>`,
    en:
      `<strong>Integrate Linquibase tool with JAVA application</strong>
          <ul>
            <li><strong>1.</strong> Whenever there is a need to change the database, just add SQL statements to the changelog file (in the source code)</li>
            <li><strong>2.</strong> Whenever the application starts, Linquibase will know which SQL statements are new based on the changelog file, and it will apply those new SQL statements to the database in the environment where the application is running</li>
          </ul>`
  },
  {
    key: 'pr1_benefit_3',
    vi: 'Tối ưu quy trình check, fix lỗi trên các môi trường khác nhau. Giảm thiểu lỗi về phiên bản CSDL, code không đang có. Cải thiện thời gian làm việc.',
    en: 'Optimized the process of checking and fixing errors across different environments. Minimized errors related to inconsistent database and code versions. Improved working time.'
  },
  {key: 'project_name_2', vi: 'Cơ sở dữ liệu dầu khí quốc gia', en: 'Vietnam national oil and gas information system'},
  {
    key: 'project_overview_2',
    vi: 'Dự án xây dựng hệ thống quản lý thông tin các mỏ dầu khí tại Việt Nam, nhằm tối ưu hóa việc quản lý và khai thác tài nguyên dầu khí.',
    en: 'Building an application to manage information of oil and gas fields in Vietnam.'
  },
  {
    key: 'project_description_2',
    vi: 'Xây dựng ứng dụng quả lý thông tin các mỏ dầu khí Việt Nam.',
    en: 'The project aims to build a management system for oil and gas fields in Vietnam, optimizing the management and exploitation of oil and gas resources.'
  },
  {
    key: 'pr2_issue_1',
    vi: 'Ứng dụng frontend được cùng phát triển bởi nhiều team độc lập, vấn đề quản lý version source code trở nên khó khăn nếu vẫn sử dụng kiến trúc monorepo truyền thống',
    en: 'The frontend application is developed by multiple independent teams, making version source code management difficult if still using traditional monorepo architecture.'
  },
  {
    key: 'pr2_solution_1',
    vi: 'Sử dụng kiến trúc Micro Frontend, mỗi team phát triển một module riêng biệt, có repository riêng. Sử dụng Module Federation của Webpack để tích hợp các module lại với nhau thành một ứng dụng hoàn chỉnh.',
    en: 'Using Micro Frontend architecture, each team develops a separate module with its own repository. Using Webpack\'s Module Federation to integrate the modules into a complete application.'
  },
  {
    key: 'pr2_benefit_1',
    vi: 'Giải quyết được vấn đề quản lý version source code, mỗi team có thể phát triển và deploy module của mình một cách độc lập mà không ảnh hưởng đến các team khác.',
    en: 'Solved the issue of source code version management, allowing each team to independently develop and deploy their module without affecting other teams.'
  },
  {key: 'project_name_3', vi: 'Hệ thống Core Banking', en: 'Core Banking System'},
  {
    key: 'project_overview_3',
    vi: 'Dự án xây dựng và duy trì hệ thống Core Banking cho Ngân hàng TMCP Bảo Việt, đảm bảo hoạt động ổn định và an toàn cho các giao dịch tài chính.',
    en: 'Participated in developing and maintaining Core Banking system, upgrading system security,...'
  },
  {
    key: 'project_description_3',
    vi: 'Tham gia phát triển và bảo trì hệ thống Core Banking, nâng cấp bảo mật hệ thống,...',
    en: 'The project involves building and maintaining the Core Banking system for Bao Viet Joint Stock Commercial Bank, ensuring stable and secure operations for financial transactions.'
  },
  {
    key: 'pr3_issue_1',
    vi: 'Trước bối cảnh gia tăng các mối đe dọa an ninh mạng, hệ thống T24 Gateway cần được nâng cấp để đảm bảo an toàn thông tin và bảo vệ dữ liệu khách hàng.',
    en: 'In the context of increasing cyber threats, the T24 Gateway system needs to be upgraded to ensure information security and protect customer data.'
  },
  {
    key: 'pr3_solution_1',
    vi: 'Tạo chữ ký số (Digital Signature) cho các thông điệp SOAP gửi từ hệ thống T24 Gateway đến các hệ thống bên ngoài. Sử dụng thuật toán mã hóa RSA với khóa 2048 bit để đảm bảo tính bảo mật và toàn vẹn của dữ liệu.',
    en: 'Create a Digital Signature for SOAP messages sent from the T24 Gateway system to external systems. Use RSA encryption algorithm with 2048-bit keys to ensure data security and integrity.'
  },
  {
    key: 'pr3_benefit_1',
    vi: 'Nâng cao mức độ bảo mật cho hệ thống T24 Gateway, giảm thiểu rủi ro bị tấn công mạng và bảo vệ thông tin khách hàng một cách hiệu quả.',
    en: 'Enhanced security level for the T24 Gateway system, minimizing the risk of cyber attacks and effectively protecting customer information.'
  },
]
