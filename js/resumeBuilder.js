/*
This is empty on purpose! Your code to build the resume will go here.
 */

/** bio object */
const bio = {
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
    appendContacts: function (contactsTag) {
        // contacts.forEach(contact => {
        //     let contactsGeneric = HTMLcontactGeneric.replace('%contact%', contact);
        //     contactsGeneric = contactsGeneric.replace('%data%', this[contact]);
        //     contactsTag.append(contactsGeneric);
        // });
        let contactsKeys = Object.keys(this.contacts);
        contactsKeys.forEach(contact => {
            let contactsGeneric = HTMLcontactGeneric.replace('%contact%', contact);
            contactsGeneric = contactsGeneric.replace('%data%', this.contacts[contact]);
            contactsTag.append(contactsGeneric);
        });
    },
    display: function() {
        let formattedName = HTMLheaderName.replace('%data%', this.name);
        let formattedRole = HTMLheaderRole.replace('%data%', this.role);
        let formattedBioPic = HTMLbioPic.replace('%data%', this.biopic);
        let formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage);

        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedBioPic);
        $('#header').append(formattedWelcomeMsg);

        if (this.skills.length > 0) {
            $('#header').append(HTMLskillsStart);

            this.skills.forEach(skill => {
                let formattedSkill = HTMLskills.replace('%data%', skill);
                $('#skills').append(formattedSkill);
            });
        }

        this.appendContacts($('#topContacts'));
        this.appendContacts($('#footerContacts'));
    },
};

/** education object */
const education = {
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
    display: function() {
        this.schools.forEach(school => {
            $('#education').append(HTMLschoolStart);
            let formattedName = HTMLschoolName.replace('%data%', school.name);
            formattedName = formattedName.replace('#', school.url);
            let formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
            let formattedDates = HTMLschoolDates.replace('%data%', school.dates);
            let formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            let formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
            $('.education-entry:last').append(formattedName + formattedDegree);
            $('.education-entry:last').append(formattedDates);
            $('.education-entry:last').append(formattedLocation);
            $('.education-entry:last').append(formattedMajor);
        });
        $('#education').append(HTMLonlineClasses);
        this.onlineCourses.forEach(course => {
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
    },

};

/** work object */
const work = {
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
    display: function() {
        this.jobs.forEach(job => {
            $('#workExperience').append(HTMLworkStart);
            let formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            let formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            let formattedDates = HTMLworkDates.replace('%data%', job.dates);
            let formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            let formattedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDescription);
        });
    },
};

/** projects object */
const projects = {
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

    display: function() {
        this.projects.forEach(project => {
            $('#projects').append(HTMLprojectStart);
            let formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
            formattedTitle = formattedTitle.replace('#', project.url);
            let formattedDates = HTMLprojectDates.replace('%data%', project.dates);
            let formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedTitle);
            $('.project-entry:last').append(formattedDates);
            $('.project-entry:last').append(formattedDescription);
            if (project.images.length > 0) {
                project.images.forEach(image => {
                    let formattedImage = HTMLprojectImage.replace('%data%', image);
                    $('.project-entry:last').append(formattedImage);
                });
            }

        });
    }
};


// display
bio.display();
education.display();
work.display();
projects.display();