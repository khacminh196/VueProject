<template>
    <div>
        <div class="dashboard-ecommerce">
            <div class="container-fluid dashboard-content ">
                <!-- ============================================================== -->
                <!-- pageheader  -->
                <!-- ============================================================== -->
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div class="page-header">
                            <h2 class="pageheader-title">E-commerce Dashboard Template </h2>
                            <p class="pageheader-text">Nulla euismod urna eros, sit amet scelerisque torton lectus vel mauris facilisis faucibus at enim quis massa lobortis rutrum.</p>
                            <div class="page-breadcrumb">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Dashboard</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">E-Commerce Dashboard Template</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- ============================================================== -->
                <!-- end pageheader  -->
                <!-- ============================================================== -->
                <div class="ecommerce-widget">
                    <a class="btn btn-secondary ml-0" v-on:click="showFormAddUser">{{ $t('formElement.add') }}</a>
                    <div class="d-flex flex-row">
                        <table width="60%" height="600px" border="1px solid">
                            <tr>
                                <td></td>
                                <th>{{ $t('formElement.name') }}</th>
                                <th>{{ $t('formElement.age') }}</th>
                                <th>{{ $t('formElement.phone') }}</th>
                            </tr>
                            <tr v-for="( user, index ) in users" v-bind:key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.age }}</td>
                                <td>{{ user.phone }}</td>
                            </tr>
                        </table>
                        <div class="form-add-user" v-bind:style="{ display : display }">
                            <form>
                                <div class="form-group ml-5">
                                    {{ $t('formElement.name') }} : <input type="text" v-model="user.name" class="form-control" placeholder="Example input">
                                    {{ $t('formElement.age') }} : <input type="number" v-model="user.age" class="form-control" placeholder="Example input">
                                    {{ $t('formElement.phone') }} : <input type="text" v-model="user.phone" class="form-control" placeholder="Example input">
                                    <button type="button" v-on:click="handleAddUser()" class="btn btn-success mt-3">{{ $t('formElement.add') }}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users : [],
            display : 'none',
            user : {
                name : '',
                age : null,
                phone : ''
            }
        }
    },
    computed : {

    },
    mounted() {
        this.getUsers()
    },
    methods : {
        getUsers() {
            this.users = this.$store.state.users
        },
        showFormAddUser() {
            this.display === 'block' ? this.display = 'none' : this.display = 'block'
        },
        handleAddUser() {
            const newUser = {
                name : this.user.name,
                age : this.user.age,
                phone : this.user.phone
            }
            
            this.$store.commit('addUser', newUser);

            this.user.name = '',
            this.user.age = '',
            this.user.phone = ''
        }
    }
}
</script>

<style>
    .ecommerce-widget {
        text-align : center
    }
    .form-add-user {
        margin-left: 30px;
        width: 30%;
    }
</style>