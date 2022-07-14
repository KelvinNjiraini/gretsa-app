<template>
    <div>
        <base-dialog :show="isLoading" fixed title="Signing you up...">
            <base-spinner v-if="isLoading"></base-spinner>
        </base-dialog>
        <base-card>
            <div class="container">
                <h3>Sign up to our service today!</h3>
                <form @submit.prevent="signUp">
                    <div class="form-group">
                        <label for="prompt"
                            >Are you an organization or a job seeker?</label
                        >
                        <select name="prompt" id="prompt" v-model.trim="prompt">
                            <option value="--select--">--select--</option>
                            <option value="job-seeker">Job Seeker</option>
                            <option value="organization">Organization</option>
                        </select>
                    </div>
                    <div v-if="prompt === 'job-seeker'">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                v-model.trim="firstName"
                            />
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                v-model.trim="lastName"
                            />
                        </div>
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
                            <label for="county">County</label>
                            <select
                                name="county"
                                id="county"
                                v-model.trim="county"
                            >
                                <option
                                    v-for="countyName in listOfCounties"
                                    :key="countyName"
                                    :value="countyName"
                                >
                                    {{ countyName }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                v-model.trim="password"
                            />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword"
                                >Confirm password</label
                            >
                            <input
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                v-model.trim="confirmPassword"
                            />
                        </div>
                    </div>
                    <div v-if="prompt === 'organization'">
                        <div class="form-group">
                            <label for="companyName"
                                >Name of Organization</label
                            >
                            <input
                                type="password"
                                name="companyName"
                                id="companyName"
                                v-model.trim="companyName"
                            />
                        </div>

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
                            <label for="field">Field of work</label>
                            <div>
                                <li
                                    v-for="(work, index) in fieldsOfWork"
                                    :key="index"
                                >
                                    <span>{{ work }}</span>
                                    <input
                                        type="checkbox"
                                        :name="work"
                                        :value="work"
                                        v-model="finalListOfFields"
                                        :checked="null"
                                    />
                                </li>
                            </div>
                        </div>
                    </div>
                    <div class="submission-box">
                        <base-button>Sign up!</base-button>
                    </div>
                </form>
            </div>
        </base-card>
    </div>
</template>
<script>
import listOfCounties from './../utils/listOfCounties';
export default {
    data() {
        return {
            prompt: '--select--',
            county: '--select--',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            isLoading: false,
            err: null,
            companyName: '',
            listOfCounties: [],
            fieldsOfWork: [
                'Agriculture',
                'IT',
                'Social Media',
                'Health Services',
                'Finance and Accounts',
                'Human Resource',
            ],
            finalListOfFields: [],
        };
    },
    computed: {},
    methods: {
        signUp() {
            this.err = null;
            if (this.email === '' || !this.email.includes('@')) {
                this.err = 'Please enter a valid email address';
                return;
            }
            if (this.password.length < 6) {
                this.err =
                    'Your password should not be less than six characters';
                return;
            }
            if (this.prompt === 'job-seeker') {
                this.store.dispatch('signup1', {
                    email: this.email,
                    companyName: this.companyName,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    prompt: this.prompt,
                });
                this.$router.push('/home');
            } else if (this.prompt === 'organization') {
                this.store.dispatch('signup2', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    county: this.county,
                    password: this.password,
                    confirmPassword: this.confirmPassword,
                    prompt: this.prompt,
                });
                this.$router.push('/home');
            }
            this.$router.push('/home');
        },
    },
    mounted() {
        this.listOfCounties = listOfCounties;
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
    font: inherit;
    /* margin-right: 1rem; */
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
}

input:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

h3 {
    margin: 1.3rem 0;
    font-size: 2.2rem;
}

.errMessage {
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
</style>
