$(document).ready(function(){
   $(window).scroll(function(){
       if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
       }else{
        $('.navbar').removeClass("sticky");
       }
   });

//    toggle menu/navbar
   $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
   });


// typing anim
var typed = new Typed(".typing", {
        strings:["Computer Scientist","Full Stack Developer", "Software Engineer", "Technologist","Coder", "Embdedded Software Engineer"],
        typeSpeed: 75,
        backSpeed:60,
        loop:true
   });
   var typed = new Typed(".typing-2", {
    strings:["Software Engineer", "Technologist","Coder"],
    typeSpeed: 75,
    backSpeed:60,
    loop:true
});

//    owl carousel script
   $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPuase: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
   });
});

// skills script
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("skills-network");

    if (window.innerWidth <= 768) {
        container.style.display = 'none';
        document.getElementById("mobile-message").style.display = 'block';
        return;
    }

    function adjustSVGSize() {
        const width = container.clientWidth;
        const height = container.clientHeight;

        svg.attr("width", width).attr("height", height);
        simulation.force("center", d3.forceCenter(width / 2, height / 2)).alpha(1).restart();
    }

    const svg = d3.select("#skills-network")
        .append("svg")
        .attr("width", container.clientWidth)
        .attr("height", container.clientHeight);

    const skillsData = {
        "nodes": [
            {"id": "Jamal Faqeeri", "group": "profile", "img": "images/me.png"},
            {"id": "Frontend Development", "group": "skill", "img": "images/frontend.png"},
            {"id": "Backend Development", "group": "skill", "img": "images/backend.png"},
            {"id": "Embedded Systems", "group": "skill", "img": "images/embedded.png"},
            {"id": "Tools & Technologies", "group": "skill", "img": "images/tools.png"},
            {"id": "Mobile Development", "group": "skill", "img": "images/mobile.png"},
            {"id": "Automation", "group": "skill", "img": "images/automation.png"},
            {"id": "Cloud Technologies", "group": "skill", "img": "images/cloud.png"},
            {"id": "Databases", "group": "skill", "img": "images/databse.png"},
            {"id": "HTML", "group": "frontend", "img": "images/html.png"},
            {"id": "CSS", "group": "frontend", "img": "images/css.png"},
            {"id": "JavaScript", "group": "frontend", "img": "images/javascript.png"},
            {"id": "React", "group": "frontend", "img": "images/react.png"},
            {"id": "ThreeJs", "group": "frontend", "img": "images/threejs.png"},
            {"id": "Bootstrap", "group": "frontend", "img": "images/bootstrap.png"},
            {"id": "Java", "group": "backend", "img": "images/java.png"},
            {"id": "Python", "group": "backend", "img": "images/python.png"},
            {"id": "Node.js", "group": "backend", "img": "images/node.png"},
            {"id": "C++", "group": "backend", "img": "images/cpp.png"},
            {"id": "Springboot", "group": "backend", "img": "images/springboot.png"},
            {"id": "Swagger", "group": "backend", "img": "images/swagger.png"},
            {"id": "Ruby", "group": "backend", "img": "images/ruby.png"},
            {"id": "Assembly", "group": "embedded", "img": "images/assembly.png"},
            {"id": "Microcontrollers", "group": "embedded", "img": "images/microcontroller.png"},
            {"id": "IoT", "group": "embedded", "img": "images/iot.png"},
            {"id": "c", "group": "embedded", "img": "images/c.png"},
            {"id": "bash", "group": "embedded", "img": "images/bash.png"},
            {"id": "Linux", "group": "embedded", "img": "images/linux.png"},
            {"id": "Git", "group": "tools", "img": "images/github.png"},
            {"id": "Docker", "group": "tools", "img": "images/docker.png"},
            {"id": "Jenkins", "group": "tools", "img": "images/jenkins.png"},
            {"id": "Atlassian", "group": "tools", "img": "images/atlassian.png"},
            {"id": "Swift", "group": "mobile", "img": "images/swift.png"},
            {"id": "Flutter", "group": "mobile", "img": "images/flutter.png"},
            {"id": "Postman", "group": "automation", "img": "images/postman.png"},
            {"id": "Cypress", "group": "automation", "img": "images/cypress.png"},
            {"id": "Karate", "group": "automation", "img": "images/karate.png"},
            {"id": "Playwright", "group": "automation", "img": "images/playwright.png"},
            {"id": "Mocha", "group": "automation", "img": "images/mocha.png"},
            {"id": "GCP", "group": "cloud", "img": "images/gcp.png"},
            {"id": "AWS", "group": "cloud", "img": "images/aws.png"},
            {"id": "Firebase", "group": "database", "img": "images/firebase.png"},
            {"id": "MongoDb", "group": "database", "img": "images/mongo.png"},
            {"id": "PostgreSQL", "group": "databse", "img": "images/psql.png"},



        ],
        "links": [
            {"source": "Jamal Faqeeri", "target": "Frontend Development"},
            {"source": "Jamal Faqeeri", "target": "Backend Development"},
            {"source": "Jamal Faqeeri", "target": "Embedded Systems"},
            {"source": "Jamal Faqeeri", "target": "Tools & Technologies"},
            {"source": "Jamal Faqeeri", "target": "Mobile Development"},
            {"source": "Jamal Faqeeri", "target": "Automation"},
            {"source": "Jamal Faqeeri", "target": "Cloud Technologies"},
            {"source": "Jamal Faqeeri", "target": "Databases"},
            {"source": "Frontend Development", "target": "HTML"},
            {"source": "Frontend Development", "target": "CSS"},
            {"source": "Frontend Development", "target": "JavaScript"},
            {"source": "Frontend Development", "target": "React"},
            {"source": "Frontend Development", "target": "ThreeJs"},
            {"source": "Frontend Development", "target": "Bootstrap"},
            {"source": "Backend Development", "target": "Java"},
            {"source": "Backend Development", "target": "Python"},
            {"source": "Backend Development", "target": "Node.js"},
            {"source": "Backend Development", "target": "C++"},
            {"source": "Backend Development", "target": "Ruby"},
            {"source": "Backend Development", "target": "Springboot"},
            {"source": "Backend Development", "target": "Swagger"},
            {"source": "Embedded Systems", "target": "Assembly"},
            {"source": "Embedded Systems", "target": "Microcontrollers"},
            {"source": "Embedded Systems", "target": "IoT"},
            {"source": "Embedded Systems", "target": "bash"},
            {"source": "Embedded Systems", "target": "c"},
            {"source": "Embedded Systems", "target": "Linux"},
            {"source": "Tools & Technologies", "target": "Git"},
            {"source": "Tools & Technologies", "target": "Docker"},
            {"source": "Tools & Technologies", "target": "Jenkins"},
            {"source": "Tools & Technologies", "target": "Atlassian"},
            {"source": "Mobile Development", "target": "Swift"},
            {"source": "Mobile Development", "target": "Flutter"},
            {"source": "Automation", "target": "Postman"},
            {"source": "Automation", "target": "Cypress"},
            {"source": "Automation", "target": "Karate"},
            {"source": "Automation", "target": "Playwright"},
            {"source": "Automation", "target": "Mocha"},
            {"source": "Cloud Technologies", "target": "GCP"},
            {"source": "Cloud Technologies", "target": "AWS"},
            {"source": "Databases", "target": "Firebase"},
            {"source": "Databases", "target": "MongoDb"},
            {"source": "Databases", "target": "PostgreSQL"},

        ]
    };

    const simulation = d3.forceSimulation(skillsData.nodes)
        .force("link", d3.forceLink(skillsData.links).id(d => d.id).distance(40))
        .force("charge", d3.forceManyBody().strength(-225))
        .force("center", d3.forceCenter(container.clientWidth / 2, container.clientHeight / 2));

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(skillsData.links)
        .enter().append("line")
        .attr("class", "link");

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("g")
        .data(skillsData.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("image")
        .attr("xlink:href", d => d.img)
        .attr("x", -30)
        .attr("y", -30)
        .attr("width", 60)
        .attr("height", 60)
        .attr("clip-path", "circle(30px)");

    node.append("text")
        .attr("dx", 35)
        .attr("dy", ".35em")
        .text(d => d.id);

    const tooltip = d3.select(".tooltip");

    node.on("mouseover", function (event, d) {
        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(d.id)
            .style("left", (event.pageX + 5) + "px")
            .style("top", (event.pageY - 28) + "px");
    }).on("mouseout", function () {
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }

    // Adjust SVG size on window resize
    window.addEventListener('resize', adjustSVGSize);

    // Initial adjustment
    adjustSVGSize();
});


