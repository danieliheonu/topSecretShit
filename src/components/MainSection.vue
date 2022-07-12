<template>
    <div class="main">
        <div class="link-title">
            <span>Snapbyte</span>
            <span>></span>
            <span>My Recordings</span>
        </div>
        <div class="record">
            <div class="record-total">
                <h3>My Recordings</h3>
                <span>{{$store.state.recordings.length}}</span>
            </div>
            <div class="record-options">
                <div class="date">
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/512/60/60798.png" alt="date-icon">
                    <span>By Date</span>
                </div>
                <div class="filter">
                    <img class="icon" src="https://static.vecteezy.com/system/resources/thumbnails/004/434/363/small/filter-icon-design-illustration-with-symbol-funnel-cone-filtering-pipe-for-advertising-business-free-vector.jpg" alt="filter-icon">
                    <span>Add Filter</span>
                </div>
                <div class="new-request">
                    <img class="icon" src="https://static.thenounproject.com/png/1363560-200.png" alt="new-request-icon">
                    <span>New Request</span>
                </div>
                <div class="new-recording" @click="$store.dispatch('openModal')">
                    <img class="icon" src="https://previews.123rf.com/images/aayam4d/aayam4d1907/aayam4d190701016/127713669-record-button-icon-audio-video-recording-start-button-vector-art-illustration.jpg" alt="new-recording-icon">
                    <span>Start Recording</span>
                </div>
            </div>
        </div>
        <Modal />
        <Recordings />
    </div>
</template>

<script>
import Recordings from './RecordingComponent.vue'
import Modal from './modal/Modal.vue'

export default {
    name: "Main",
    components: {
        Recordings,
        Modal
    }
}
</script>

<style scoped>
.main {
    width: 80%;
    padding: 20px 20px 20px 90px;
}

.link-title {
    margin-bottom: 10px;
}

.link-title span{
    color: lightgrey;
    font-size: 10.5px;
    margin-right: 10px;
}

.record {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.record .record-total {
    display: flex;
    align-items: center;
}

.record .record-total h3 {
    margin-right: 11px;
    font-weight: 400;
}

.record .record-total span {
    font-size: 18px;
    font-weight: bold;
    color: grey;
}

.record .record-options {
    display: flex;
}

.record .record-options div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 1px solid lightgrey;
    padding: 3px 13px;
    border-radius: 20px;
}

.record .record-options div:hover {
    cursor: pointer;
}

.record-options .icon {
    width: 20px;
    height: 20px;
}

.record-options .date .icon {
    height: 12px;
}

.record-options .filter .icon {
    height: 25px;
}

.record-options .new-recording .icon, .record-options .new-request .icon {
    margin-right: 5px;
    border-radius: 50%;
}

.record-options .new-request {
    background-color: #00bcd4;
    color: white;
}

.record-options .new-recording {
    background-color: red;
    color: white;
}
</style>