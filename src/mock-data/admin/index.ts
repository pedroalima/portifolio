import { FormDataTypes } from "@/types";

export const initialHomeViewFormData: FormDataTypes = {
    mainText: "",
    description: ""
};

export const initialAboutViewFormData: FormDataTypes = {
    about: "",
    projects: "",
    experience: "",
    skills: ""
};

export const initialExperienceViewFormData: FormDataTypes = {
    position: "",
    company: "",
    duration: "",
    location: "",
    jobprofile: "",
};

export const initialEducationViewFormData: FormDataTypes = {
    degree: "",
    year: "",
    college: "",
};

export const initialProjectsViewFormData: FormDataTypes = {
    name: "",
    website: "",
    technologies: "",
    github: "",
};

export const initialLoginViewFormData: FormDataTypes = {
    username: "",
    password: ""
};

export const navItems = [
    {
        id: "home",
        label: "Home"
    },
    {
        id: "about",
        label: "About"
    },
    {
        id: "experience",
        label: "Experience"
    },
    
    {
        id: "education",
        label: "Education"
    },
    
    {
        id: "projects",
        label: "Projects"
    },
    {
        id: "contact",
        label: "Contact"
    }
];

export const navItemsClient = [
    {
        id: "about",
        label: "About"
    },
    {
        id: "experience",
        label: "Experience"
    },
    {
        id: "projects",
        label: "Projects"
    },
    // {
    //     id: "contact",
    //     label: "Contact"
    // }
];