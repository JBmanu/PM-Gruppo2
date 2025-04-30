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
                        {text: 'Aspettative del committente', link: `${reportPath}/1-aspettative-del-committente`},
                        {text: 'Proposte del committente', link: `${reportPath}/2-proposte-del-committente`},
                        {text: 'Project overview statements', link: `${reportPath}/3-POS`},
                        {text: 'Requirements breakdown structure', link: `${reportPath}/4-RBS`},
                        {text: 'Domande', link: `${reportPath}/5-domande`},
                    ]
                },
            ],

            socialLinks: [
                {icon: 'github', link: 'https://github.com/JBmanu/PM-Gruppo2'}
            ]
        }
    })
)
