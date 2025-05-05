import {defineConfig} from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

let reportPath = '/report'
let processPath = '/process'
// https://vitepress.dev/reference/site-config

export default withMermaid(
    defineConfig({
        base: '/PM-Gruppo2/',
        title: "PM-Gruppo2",
        description: "Ulisse an Train Infrastructure Similator",
        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            nav: [
                {text: 'Home', link: '/'},
            ],

            sidebar: [
                {text: 'Report',
                    items: [
                        {text: 'Introduzione', link: `${reportPath}/0-intro`},
                        {text: 'Process scoping meeting', link: `${reportPath}/1-process-scoping-meeting`},
                        {text: 'Valutazione proposte del committente', link: `${reportPath}/2-valutazione-proposte-committente`},
                        {text: 'Project Overview Statements', link: `${reportPath}/3-POS`},
                        {text: 'Requirements Breakdown Structure', link: `${reportPath}/4-RBS`},
                        {text: 'Domande', link: `${reportPath}/5-domande`},
                        {text: 'Traduzione', link: `${reportPath}/6-traduzione`},
                        {text: 'Analisi dei rischi', link: `${reportPath}/POS-AnalisiRischi`}
                    ]
                },
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/JBmanu/PM-Gruppo2'}
            ]
        }
    })
)
