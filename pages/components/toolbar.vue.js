Vue.component("spa-toolbar", {
  template: `
        <div>
            <v-toolbar dark color="primary" class="mb-2">
                <v-layout align-center>
                    <router-link to="/"><v-toolbar-title class="white--text">StoryBoard</v-toolbar-title></router-link>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <router-link to="/settings"><v-btn text>Settings</v-btn></router-link>
                        <router-link to="/story"><v-btn text>Story</v-btn></router-link>
                    </v-toolbar-items>
                </v-layout>
            </v-toolbar>
            <v-navigation-drawer
                permanent
                expand-on-hover
                >
                <v-list
                    nav
                    dense
                >
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-folder</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>My Files</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-account-multiple</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Shared with me</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                    <v-list-item-icon>
                        <v-icon>mdi-star</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Starred</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </div>
`,
  props: ["title"],
  $_veeValidate: {
    validator: "new",
  },
});
