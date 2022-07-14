<template>
    <div>
        <base-dialog :show="isLoading" fixed title="Logging in..">
            <base-spinner v-if="isLoading"></base-spinner>
        </base-dialog>
        <base-card>
            <div class="container">
                <h3>Apply for Plumbing position</h3>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            v-model.trim="email"
                        />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea
                            name="description"
                            id="description"
                            cols="30"
                            rows="10"
                        ></textarea>
                    </div>
                    <div class="form-group">
                        <label for="myFile">Appload your CV</label>
                        <input type="file" id="myFile" name="filename" />
                    </div>
                    <base-button>Apply</base-button>
                </form>
            </div>
        </base-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: null,
            isLoading: false,
        };
    },
    methods: {
        async login() {
            this.errorMessage = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.errorMessage = 'Please enter a valid email address';
                return;
            }
            if (this.password.length < 6) {
                this.errorMessage =
                    'Your password should not be less than six characters';
                return;
            }

            try {
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                });
                this.$router.replace('/');
            } catch (err) {
                this.errorMessage = err || 'Something went wrong';
            }

            // this.isLoading = true;
            // await this.$store.dispatch('login', {
            //     email: this.email,
            //     password: this.password,
            // });
            // await this.fetchUser();
            // this.isLoading = false;
            // if (this.$store.getters.getUserInfo.level === 'primary') {
            //     this.$router.replace('/');
            // } else {
            //     this.$router.replace('/highschool');
            // }
        },
    },
};
</script>

<style scoped>
.container {
    margin: 2rem;
}

.form-group {
    margin: 1.5rem 0;
}

input {
    display: inline-block;
    width: 100%;
    border: 1px solid #ccc;
    /* font: inherit; */
    font-size: 1.3rem;
    padding: 1rem 1.5rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #1572a1;
}

h3 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

.errorMessage {
    font-size: 1.3rem;
    color: red;
}

.invalid input {
    border: 1px solid red;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
button {
    outline: none;
    margin: 0.6rem 0;
}

.form-group {
    margin: 1.5rem 0;
}

label {
    font-size: 1.5rem;
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}
.forgot-password-box {
    margin-left: 2rem;
}
</style>
