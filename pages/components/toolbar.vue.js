Vue.component("spa-toolbar", {
  template: `
        <div>
            <v-app-bar
                app
                dark
                nav
            >
                <v-spacer></v-spacer>
                <v-toolbar-title nav class="white--text"><router-link to="/">StoryBoard</router-link></v-toolbar-title>
            </v-app-bar>
        
            <v-navigation-drawer
                permanent
                expand-on-hover
                app
            >
                <v-list
                    nav
                    dense
                >
                    <v-list-item link to="/">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    
                    <v-list-item link to="/story">
                        <v-list-item-icon>
                            <v-icon>mdi-folder-text</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Board</v-list-item-title>
                    </v-list-item>

                    <v-list-item link to="/features">
                        <v-list-item-icon>
                            <v-icon>mdi-star-circle-outline</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Features</v-list-item-title>
                    </v-list-item>

                    <v-list-item link to="/settings">
                        <v-list-item-icon>
                            <v-icon>mdi-cog</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
`,
  data: () => ({}),
});
