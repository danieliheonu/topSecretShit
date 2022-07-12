<template>
  <table>
    <thead>
      <tr>
        <th width="10%" height="55px" align="left">Recordings</th>
        <th width="50%" height="55px" align="left">Title</th>
        <th width="5%" height="55px" align="left">Views</th>
        <th width="7%" height="55px" align="left">Size</th>
        <th width="10%" height="55px" align="left">Last Modified</th>
        <th width="5%" height="55px" align="left"></th>
      </tr>
    </thead>
    <tbody>
      <tr :key="record.id" v-for="record in $store.state.recordings">
        <td>
            <img class="image" :src="record.image" />
        </td>
        <td>
          <div>
          <h3>{{record.title}}</h3>
          <p>{{record.description ? record.description.slice(0, 100) : "No description"}}</p>
          </div>
        </td>
        <td>{{record.views}}</td>
        <td>{{record.size}}</td>
        <td>{{record.last_modified}}</td>
        <td>
            <div class="ellipses">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Recordings",
}
</script>

<style>
table {
  margin-top: 20px;
}

tbody td {
  padding-bottom: 20px;
}

.image {
  width: 80px;
  height: 50px;
}

th {
  font-size: 15px;
}

.ellipses {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.dot {
  width: 5px;
  height: 5px;
  background-color: black;
  border-radius: 50%;
  margin: 0 1px;
}

</style>