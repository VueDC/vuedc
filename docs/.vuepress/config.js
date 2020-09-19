module.exports = {
	base: '/',
	title: 'VueDC',
	description:
		'Calling all prospective and enthusiastic people about Vue.js in the DC Metro Area!',
	dest: './dist',
	themeConfig: {
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Community',
				link: '/community/'
			},
			{
				text: 'Archives',
        link: '/archives/',
        items: [
          {
            text: 'Speaker Archives',
            link: '/archives/'
          },
          {
            text: 'Trivia Winners',
            link: '/archives/winners'
          }
        ]
			},
			{
				text: 'Resources',
				link: '/resources/'
			},
			{
				text: 'Code of Conduct',
				link: '/code-of-conduct/'
			}
    ],
    sidebar: [
      {
        title: 'Past Speakers',
        path: '/archives/',
        collapsable: false,
        sidebarDepth: 1
      }
    ]
	}
}
