
export const app_lang = {

    CI: {

        // nav
        nav_home: 'Accueil',
        nav_about: 'à propos',
        nav_project: 'Projets',
        nav_language: 'Langue',


        // home page
        home_enthu : 'Un développeur PHP enthousiaste.',
        home_info : 'Je transforme des idées en applications Web hautes performances et évolutives.',

        // about

        // projects
        p_my_projects : 'Mes projets',
        visit : 'Visite'

    },

    en: {

        // nav
        nav_home: 'Home',
        nav_about: 'About',
        nav_project: 'Projects',
        nav_language: 'Language',


        // home page
        home_enthu : 'An Enthusiastic PHP Developer.',
        home_info : 'I Transform Ideas into High-Performance, Scalable Web Applications.',

        // about

        // projects
        p_my_projects : 'Mes projets',
        visit : 'Visit'

    }
}


export function getLang(lang = 'en') {

    if (app_lang[lang]) {

        return app_lang[lang]
    }
    else {
        return app_lang['en']
    }
}