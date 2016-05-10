Ext.define('MyApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',
                cls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2!'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                xtype: 'nestedlist',
								title: 'Blog',
                iconCls: 'star',
								displayField: 'title',
								
								store: {
										type: 'tree',
												
										fields: [
												'title', 'link', 'author', 'contentSnippet', 'content',
												{name: 'leaf', defaultValue: true}
										],

										root: {
												leaf: false
										},

										proxy: {
												type: 'jsonp',
												url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.abcnews.com/abcnews/worldnewsheadlines',
												reader: {
														type: 'json',
														rootProperty: 'responseData.feed.entries'
												}
										}		
								},
								
								detailCard: {
										xtype: 'panel',
										scrollable: true,
										styleHtmlContent: true
								},
								
								listeners: {
										itemtap: function(nestedList, list, index, element, post){
												this.getDetailCard().setHtml(post.get('content') + '::::' + post.get('title'));
										}
								}
            },
						{
								title: 'Contact',
								iconCls: 'user',
								xtype: 'formpanel',
								url: 'contact.php',
								layout: 'vbox',
								
								items: [
										{
												xtype: 'fieldset',
												title: 'Contact Us',
												instructions: '(email address is optional)',
												height: 285,
												items: [{
														xtype: 'textfield',
														label: 'Name'
												},{
														xtype: 'textfield',
														label: 'Email'
												},{
														xtype: 'textareafield',
														label: 'Message'
												}]
										},{
												xtype: 'button',
												text: 'Send',
												ui: 'confirm',
												hadler: function() {
														this.up('formpanel').submit();
												}
										}
								]
						}
        ]
    }
});
