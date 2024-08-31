function showSkill(skill) {
    const skillInfo = document.getElementById('skill-info');
    
    let content = '';

    switch(skill) {
        case 'python':
            content = `
                <h1>Python</h1>
                <p>Python is a versatile, high-level programming language known for its simplicity and readability,
                 making it an excellent choice for both beginners and experienced developers. Created by Guido van 
                 Rossum and first released in 1991, Python emphasizes code readability with its clear and 
                 easy-to-understand syntax. It supports multiple programming paradigms, including procedural, 
                 object-oriented, and functional programming, making it suitable for a wide range of applications 
                 such as web development, data science, artificial intelligence, automation, and more. Python's 
                 extensive standard library, coupled with a large and active community, provides robust tools and 
                 resources, making it one of the most popular and in-demand languages in the tech industry today.</p>
                <a href="https://www.w3schools.com/python/" target="_blank">Learn More on W3Schools</a>
            `;
            break;
        case 'java':
            content = `
                <h2>Java</h2>
                <p>Java is a versatile and powerful programming language that has been a cornerstone in the world of 
                software development since its inception in the mid-1990s. Designed with the principle of "write once,
                 run anywhere," Java enables developers to create applications that can run on any device with a 
                 Java Virtual Machine (JVM). Its syntax, influenced by C and C++, is both straightforward and robust,
                  making it an ideal choice for building a wide range of applications, from web and mobile apps to 
                  large-scale enterprise systems. With a strong emphasis on object-oriented principles, Java promotes
                   code reusability and maintainability. Its extensive standard library, coupled with a thriving
                    ecosystem of frameworks and tools, further enhances its capabilities, making Java a popular
                     choice for developers around the world.</p>
                <a href="https://www.w3schools.com/java/" target="_blank">Learn More on W3Schools</a>
            `;
            break;
        case 'sql':
            content = `
                <h2>SQL</h2>
                <p>SQL, or Structured Query Language, is the standard language used for managing and manipulating
                 relational databases. It provides a powerful and efficient way to query, update, and manage data 
                 stored in database systems. SQL's declarative nature allows users to specify what data they need
                  without detailing how to retrieve it, making it accessible for both simple queries and complex 
                  transactions. With its robust syntax, SQL enables the creation of databases, tables, and 
                  relationships, as well as the ability to perform operations such as filtering, sorting, and 
                  aggregating data. Its widespread use across various database systems, such as MySQL, PostgreSQL,
                   and SQL Server, highlights its importance in data management and its role in supporting the 
                   backbone of many applications and business processes.</p>
                <a href="https://www.w3schools.com/sql/" target="_blank">Learn More on W3Schools</a>
            `;
            break;
        case 'css':
            content = `
                <h2>CSS</h2>
                <p>CSS, or Cascading Style Sheets, is a fundamental technology used in web development to control 
                the presentation and layout of web pages. By separating content from design, CSS allows developers
                 to apply styles—such as colors, fonts, and spacing—to HTML elements, enhancing the visual appeal 
                 and usability of websites. With its ability to define responsive layouts and adapt designs to
                  different screen sizes, CSS is crucial for creating modern, accessible, and user-friendly web
                   experiences. Its flexible and modular nature facilitates the maintenance and scaling of web 
                   projects, as styles can be reused and easily updated across multiple pages. CSS frameworks 
                   band preprocessors, such as Bootstrap and Sass, further extend its capabilities, enabling 
                   developers to streamline their workflow and implement sophisticated design features with
                    greater efficiency.</p>
                <a href="https://www.w3schools.com/css/" target="_blank">Learn More on W3Schools</a>
            `;
            break;
        case 'javascript':
            content = `
                <h2>JavaScript</h2>
                <p>JavaScript is a dynamic and versatile programming language widely used in web development to create
                 interactive and responsive user experiences. As a core technology of the web, JavaScript enables
                  developers to manipulate HTML and CSS, allowing for real-time updates and dynamic content changes 
                  on web pages. Its event-driven nature supports a wide range of functionalities, from simple 
                  animations to complex web applications and server-side scripting. JavaScript's extensive ecosystem, 
                  including libraries and frameworks like React, Angular, and Vue.js, has made it a key player in modern 
                  web development. With its ability to run in various environments, including browsers and servers 
                  (via Node.js), JavaScript continues to be an essential tool for building robust and engaging digital
                   experiences.</p>
                <a href="https://www.w3schools.com/js/" target="_blank">Learn More on W3Schools</a>
            `;
            break;
        default:
            content = `<h2>Welcome to Skill Navigator!</h2><p>Select a skill to learn more about it.</p>`;
    }

    skillInfo.innerHTML = content;
}
