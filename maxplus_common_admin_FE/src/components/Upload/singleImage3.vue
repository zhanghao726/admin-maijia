<template>
    <div class="upload-container">
        <el-upload class="image-uploader" :data="dataObj" drag :multiple="false" :show-file-list="false"
                   :action="upload_url" :headers="upload_headers"
                   :on-success="on_success">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">点击上传</div>
        </el-upload>
        <div class="image-preview image-app-preview" :style="img_view_style">
            <div class="image-preview-wrapper" v-show="imageUrl.length>1">
                <img :src="imageUrl">
                <div class="image-preview-action">
                    <i @click="rmImage" class="el-icon-delete"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getToken} from '../../utils/auth'

    export default {
        name: 'singleImageUpload3',
        props: {
            value: String,
            img_view_width: {
                type: String,
                default: "95%"
            },
            img_view_height: {
                type: String,
                default: "200px"
            },
        },
        computed: {
            imageUrl() {
                return this.value
            },
            img_view_style() {
                return {
                    width: this.img_view_width,
                    height: this.img_view_height
                }
            }

        },
        data() {
            return {
                upload_url:process.env.BASE_API+"upload",
                tempUrl: '',// 用于blob地址
                dataObj: {token: '', key: ''},
                upload_headers: {
                    "X-Request-Timestamp": new Date().getTime(),
                    "Authorization": "Bearer " + getToken()
                }
            }
        },
        methods: {
            rmImage() {
                this.emitInput('')
            },
            emitInput(val) {
                this.$emit('input', val)
            },
            beforeUpload() {

            },
            on_success(r, f, fl) {
                this.$emit('input', r.data["img_url"]);
            },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../../styles/mixin.scss";

    .upload-container {
        position: relative;
        @include clearfix;
        .image-uploader {
            width: 200px;
        }
        .image-preview {
            width: 200px;
            height: 200px;
            position: relative;
            border: 1px dashed #d9d9d9;
            margin-left: 50px;
            .image-preview-wrapper {
                position: relative;
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .image-preview-action {
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                cursor: default;
                text-align: center;
                color: #fff;
                opacity: 0;
                font-size: 20px;
                background-color: rgba(0, 0, 0, .5);
                transition: opacity .3s;
                line-height: 200px;
                .el-icon-delete {
                    font-size: 36px;
                }
            }
            &:hover {
                .image-preview-action {
                    opacity: 1;
                }
            }
        }
        .image-app-preview {
            width: 95%;
            height: 200px;
            position: relative;
            border: 1px dashed #d9d9d9;
            float: left;
            margin: 0 auto;
            .app-fake-conver {
                height: 44px;
                position: absolute;
                width: 100%; // background: rgba(0, 0, 0, .1);
                text-align: center;
                line-height: 64px;
                color: #fff;
            }
        }
    }
</style>
