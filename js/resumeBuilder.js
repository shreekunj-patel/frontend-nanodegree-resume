/*
This is empty on purpose! Your code to build the resume will go here.
 */

/** data */
const data = {
    init: function() {
        // if resumeData not empty, then resumeData is loaded from localStorage
        if (localStorage.getItem('resumeData')) {
            this.resumeData = this.loadResumeData();
        } else {
            this.resumeData = this.initResumeData();
            this.saveResumeData();
        }

        this.bio = this.resumeData.bio;
        this.work = this.resumeData.work;
        this.projects = this.resumeData.projects;
        this.education = this.resumeData.education;
    },
    initBio: function() {
        let bio = {
            name: 'Tony Stark',
            role: 'Superhero: Iron Man',
            contacts: {
                mobile: '777-MAN-IRON',
                email: 'tonytheIronMan@fakeIt.com',
                github: 'tony-stark',
                twitter: '@Iron_Man',
                location: 'Malibu; NYC',
            },
            welcomeMessage: 'I Build Neat Stuff, Got A Great Girl, Occasionally Save The World.',
            skills: [
                'Genius level intellect',
                'Proficient scientist and engineer',
                'Powered armor suit with super-human strength, speed, reflexes, senses and  regenerative life support',
                'Money',
            ],
            biopic: 'images/TonyStark.jpg',
        };
        return bio;
    },
    initWork: function() {
        let work = {
            jobs: [
                {
                    employer: 'The Avengers',
                    title: 'Consultant',
                    location: 'New York, NY',
                    dates: '2014 - Present',
                    description: 'I am a consultant for the Avengers, a team of superheroes who work to protect the world from the evil Thanos. Some of my responsibilities include: Lead the team in the development of the new Ultron program, which will allow the Avengers to defeat the evil Thanos, and lead the team in the development of the new Infinity Gauntlet, which will allow the Avengers to defeat the evil Thanos.',
                },
                {
                    employer: 'Stark Industries',
                    title: 'CEO',
                    location: 'Malibu, CA',
                    dates: '2012 - 2014',
                    description: 'I am an engineer for the Stark Industries, ' +
                        'developing and manufacturing weapons and armor for the Avengers. ' +
                        'Some of my responsibilities include: Developing the Jarvis Vision, ' +
                        'a device that allows the Avengers to see through the walls of space, ' +
                        'and an artificial intelligence that can be controlled by the Avengers. '
                },
            ],
        };
        return work;
    },
    initEducation: function() {
        let education = {
            schools: [
                {
                    name: 'Massachusetts Institute of Technology',
                    location: 'Cambridge, MA',
                    degree: 'Masters of Engineering',
                    majors: ['Computer Science', 'Electrical Engineering'],
                    dates: '1983-1985',
                    url: 'https://www.mit.edu/',
                },
                {
                    name: 'Massachusetts Institute of Technology',
                    location: 'Cambridge, MA',
                    degree: 'Master of Physics',
                    majors: ['Physics'],
                    dates: '1985-1987',
                    url: 'https://www.mit.edu/',
                },
            ],
            onlineCourses: [
                {
                    title: 'Artificial Intelligence',
                    school: 'Udacity',
                    dates: '1989-1990',
                    url: 'https://www.udacity.com/course/artificial-intelligence-nanodegree--nd000',
                },
                {
                    title: 'Quantum Mechanics',
                    school: 'Udacity',
                    dates: '1989-1990',
                    url: 'https://www.udacity.com/course/quantum-mechanics--nd001',
                },
            ],
        };
        return education;
    },
    initProjects: function() {
        let projects = {
            projects: [
                {
                    title: 'Mark 1',
                    dates: '2012',
                    description: 'This is a project that I did when I was captured by the terrorist group `Ten Rings`, who order me to build a Jericho missile for them. Instead, i and fellow captive Dr. Yinsen secretly build a crude but strong power armor (Mark 1) ',
                    images: ['images/mark-1.jpg'],
                },
                {
                    title: 'Arc Reactor',
                    dates: '2012',
                    description: 'The arc reactor power electromagnet that protects my heart from the shrapnel inside his chest, and also the Iron Man armor',
                    images: ['images/arc_reactor.jpg'],
                },
                {
                    title: 'F.R.I.D.A.Y',
                    dates: '2015',
                    description: 'F.R.I.D.A.Y. is an A.I. created by Tony Stark with a female personality. F.R.I.D.A.Y. was uploaded into the Iron Man armor as a back up for J.A.R.V.I.S. when he merged with Vision.',
                    images: ['images/friday.jpg', 'images/jarvis.jpg'],
                },
                {
                    title: 'Even Dead, I\'m The Hero.',
                    dates: '2020',
                    description: 'Even Dead, I\'m The Hero or E.D.I.T.H. is an augmented reality security and defense A.I. created by Tony Stark with a female personality.',
                    images: ['images/edith.jpg',]
                },
            ],
        };
        return projects;
    },
    loadResumeData: function() {
        return JSON.parse(localStorage.getItem('resumeData'));
    },
    initResumeData: function() {
        return {
            bio: this.initBio(),
            work: this.initWork(),
            education: this.initEducation(),
            projects: this.initProjects(),
        };
    },
    getBio: function() {
        return this.bio;
    },
    getWork: function() {
        return this.work;
    },
    getProjects: function() {
        return this.projects;
    },
    getEducation: function() {
        return this.education;
    },
    getResumeData: function() {
        return this.resumeData;
    },
    saveResumeData: function() {
        localStorage.setItem('resumeData', JSON.stringify(this.resumeData));
    },
};


/** octopus */
const octopus = {
    init: function() {
        data.init();
        view.init();
    },
    getBio: function() {
        return data.getBio();
    },
    getWork: function() {
        return data.getWork();
    },
    getProjects: function() {
        return data.getProjects();
    },
    getEducation: function() {
        return data.getEducation();
    },
    getResumeData: function() {
        return data.getResumeData();
    },
    saveResumeData: function() {
        data.saveResumeData();
    },
    getSkills: function() {
        return this.getBio().skills;
    },
    getContacts: function() {
        return this.getBio().contacts;
    },
    getSchools: function() {
        return this.getEducation().schools;
    },
    getOnlineCourses: function() {
        return this.getEducation().onlineCourses;
    },
    getJobs: function() {
        return this.getWork().jobs;
    },
    getProjectsList: function() {
        return this.getProjects().projects;
    },
};


/** view */
const view = {
    init: function() {
        this.displayBio();
        this.displayWork();
        this.displayProjects();
        this.displayEducation();
    },
    displayContacts: function(contactsTag) {
        const contacts = octopus.getContacts();
        const contactsKeys = Object.keys(contacts);
        contactsKeys.forEach(contact => {
            let contactValue = contacts[contact];
            let formattedContact = HTMLcontactGeneric.replace('%contact%', contact);
            formattedContact = formattedContact.replace('%data%', contactValue);
            contactsTag.append(formattedContact);
        });

    },
    displayBio: function() {
        const bio = octopus.getBio();
        const skills = octopus.getSkills();
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        if (skills.length > 0) {
            $('#header').append(HTMLskillsStart);
            skills.forEach(skill => {
                $('#skills').append(HTMLskills.replace('%data%', skill));
            });
        }
        this.displayContacts($('#topContacts'));
        this.displayContacts($('#footerContacts'));
    },
    displayWork: function() {
        const jobs = octopus.getJobs();
        console.log(jobs);
        if (jobs.length > 0) {
            jobs.forEach(job => {
                $('#workExperience').append(HTMLworkStart);
                $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
                $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
                $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
                $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
            });
        }

    },
    displayProjects: function() {
        const projects = octopus.getProjectsList();
        projects.forEach(project => {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
            project.images.forEach(image => {
                $('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
            });
        });
    },
    displayEducation: function() {
        const schools = octopus.getSchools();
        const onlineCourses = octopus.getOnlineCourses();
        schools.forEach(school => {
            $('#education').append(HTMLschoolStart);
            let formattedName = HTMLschoolName.replace('%data%', school.name);
            let formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            let formattedNameDegree = formattedName + formattedDegree;
            $('.education-entry:last').append(formattedNameDegree);
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location));
            school.majors.forEach(major => {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
            });
        });
        if (onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            onlineCourses.forEach(course => {
                $('#education').append(HTMLschoolStart);
                let formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
                formattedTitle = formattedTitle.replace('#', course.url);
                let formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
                let formattedDates = HTMLonlineDates.replace('%data%', course.dates);
                let formattedURL = HTMLonlineURL.replace('%data%', course.url);
                $('.education-entry:last').append(formattedTitle + formattedSchool);
                $('.education-entry:last').append(formattedDates);
                $('.education-entry:last').append(formattedURL);
            });
        }
    },


};

octopus.init();