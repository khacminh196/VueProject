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
                    <table width="100%" height="600px" border="1px solid">
                        <tr>
                            <td></td>
                            <th>{{ $t('formElement.name') }}</th>
                            <th>{{ $t('formElement.age') }}</th>
                            <th>{{ $t('formElement.phone') }}</th>
                        </tr>
                        <tr v-for="user in users" v-bind:key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.age }}</td>
                            <td>{{ user.phone }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users : [
                {
                    id : 1,
                    name : "Join Wick 1",
                    age : 20,
                    phone : "0999999999"
                },
                {
                    id : 2,
                    name : "Join Wick 2",
                    age : 21,
                    phone : "0988888888"
                },
                {
                    id : 3,
                    name : "Join Wick 3",
                    age : 22,
                    phone : "0977777777"
                },
                {
                    id : 4,
                    name : "Join Wick 4",
                    age : 23,
                    phone : "0966666666"
                },
                {
                    id : 5,
                    name : "Join Wick 5",
                    age : 24,
                    phone : "0555555555"
                },
                {
                    id : 6,
                    name : "Join Wick 6",
                    age : 25,
                    phone : "0944444444"
                },
                {
                    id : 7,
                    name : "Join Wick 7",
                    age : 26,
                    phone : "0933333333"
                },
            ]
        }
    }
}
</script>

<style>
    .ecommerce-widget {
        text-align : center
    }
</style>