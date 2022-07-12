<template>
  <transition name="fade">
    <div class="modal" v-if="$store.state.show">
        <div class="modal__backdrop" />
        <div class="modal__dialog">
            <div class="modal__header">
                <h3>New Recording</h3>
                <span class="close" @click="$store.dispatch('closeModal')">X</span>
            </div>

            <div class="modal__body">
                <p>Save the recording in</p>
                <div class="form-group">
                <select class="form-control" name="" id="">
                    <option>Select a project</option>
                </select>
                </div>
                <div class="record-screen">
                    <span>Record Screen</span>
                    <label class="switch">
                        <input type="checkbox" v-model="$store.state.recordScreen">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="record-screen">
                    <span>Record Camera</span>
                    <label class="switch">
                        <input type="checkbox" v-model="$store.state.recordCamera">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="record-screen">
                    <span>Record Mic</span>
                    <label class="switch">
                        <input type="checkbox" v-model="$store.state.recordMic">
                        <span class="slider round"></span>
                    </label>
                </div>
                <button class="record-btn"><router-link to="/live" @click="$store.dispatch('grantPermission')">Start Recording</router-link></button>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'Modal',
}
</script>

<style scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 25%;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}

.modal__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}

.modal__dialog {
    background-color: #ffffff;
    position: relative;
    width: 250px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;

}

.modal__dialog .close {
    cursor:pointer;
}

@media screen and (max-width: 992px) {
    .modal__dialog{
        width: 90%;
    }
}
.modal__close {
    width: 30px;
    height: 30px;
}
.modal__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.modal__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.modal__body .form-control {
    background-color: #f5f5f5;
    height: 30px;
    width: 210px;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
}

.modal__body .form-control:focus {
    outline: none;
}

.modal__body p {
    margin-bottom: 10px;
}

.modal__footer {
    padding: 10px 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.record-screen {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 15px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: lightgrey;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 11px;
  width: 11px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: lightgreen;
}

input:focus + .slider {
  box-shadow: 0 0 1px white;
}

input:checked + .slider:before {
  -webkit-transform: translateX(14px);
  -ms-transform: translateX(14px);
  transform: translateX(14px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 15px;
}

.slider.round:before {
  border-radius: 50%;
}

.record-btn {
    width: 80%;
    margin: 20px auto;
    height: 30px;
    border-radius: 20px;
    background-color: #00bcd4;
    border: 1px solid transparent;
    cursor: pointer;
}

.record-btn a {
    text-decoration: none;
    color: white;
}
</style>