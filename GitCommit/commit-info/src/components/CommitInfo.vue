<template>
  <div class="container">
    <div class="row">
      <div class="side">
        <div class="fakeimg">
          <img :src="commitData.avatar_url" alt="Avatar" style="width:100%" />
        </div>
      </div>
      <div class="main">
        <div class="header">{{commitData.message}}</div>
        <div class="body-container">
          <div class="body1">
            <div class="muted-color">
              Authored by
              <span class="body-color">
                <b>{{commitData.author.name}}</b>
              </span> four days ago
            </div>
            <div
              class="body-color"
            >This is body text. Lorem ipsum dolor sit amet, consecteture adisporest elere. sdfd ipsun meass egetaed is pellentesque volutee masunere amet.</div>
          </div>
          <div class="body2">
            <div class="muted-color">
              Commited by
              <span class="body-color">
                <b>{{commitData.committer.name}}</b>
              </span> three days ago
            </div>
            <div class="muted-color">
              Commit
              <span class="body-color">{{commitSHA}}</span>
            </div>
            <div class="muted-color">
              Parent
              <span class="link monospace">{{commitData.parents[0].sha}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="codeContainer">
      <div id="dialog2" class="triangle_down1"></div>
      <div id="dialog3" class="triangle_up1"></div>

      <div class="collapsible-container">
        <div v-for="element in getCommitData" :key="element">
          <a
            :id="element.baseFile.path"
            class="collapsible link"
            @click="click(element.baseFile.path)"
          >{{ element.baseFile.path }}</a>
          <div class="content border">
            <table>
              <tr v-for="(line, index) in getLines(element)" :key="line" class="monospace">

                <td
                  class="col1 code-secondary"
                  v-bind:class="{'green':addedLine(line), 'red': removedLine(line)}"
                >
                  <span v-if="!addedLine(line)"> {{ index }}</span>
                </td>

                <td
                  class="col2 code-secondary"
                  v-bind:class="{'green':addedLine(line), 'red': removedLine(line)}"
                >
                  <span v-if="!removedLine(line)">{{ index }}</span>
                </td>
                
                <td
                  class="col3 code-primary"
                  v-bind:class="{'green':addedLine(line), 'red': removedLine(line)}"
                >
                  <!-- <code> -->
                  {{ line }}
                  <!-- </code> -->
                </td>
              </tr>
            </table>
          </div>
          <!-- <a class="collapsible link active">{{ element.baseFile.path }}</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCommitData } from "../services.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      commitData: [],
      oldFileIndex: 0,
      newFileIndex: 0,
      owner: this.$route.params.owner,
      repository: this.$route.params.repository,
      commitSHA: this.$route.params.commitSHA
    };
  },
  computed: {
    getCommitData() {
      return this.commitData.fileData;
    }
  },
  async created() {
    this.commitData = await getCommitData(
      this.owner,
      this.repository,
      this.commitSHA
    );
  },
  mounted() {},
  methods: {
    getLines(elements) {
      return elements?.hunks?.split("\n") || ["Empty File"];
    },
    addedLine(line) {
      return line.startsWith("+");
    },
    removedLine(line) {
      return line.startsWith("-");
    },
    colSpan(line) {
      return line.startsWith("@@");
    },
    click(id) {

      var coll = document.getElementById(id);


      coll.classList.toggle("active");
      var content = coll.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        content.style.marginBottom = "2rem";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.marginBottom = "1.5rem";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
}
.container {
  padding: 2rem;
  background-color: #fbfdff;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.side {
  flex: 50px;
  /* background-color: #f1f1f1; */
  border: 0px solid;
}

.main {
  flex: calc(100% - 54px);
  /* // background-color: white; */
  border: 0px solid;
}
.header {
  color: #39496a;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}
.body-container {
  display: flex;
  font: 12px;
}
.body-color {
  color: #39496a !important;
}
.muted-color {
  color: #6d727c !important;
}
.link {
  color: #1c7cd5 !important;
}
.code-primary {
  color: #657b83 !important;
}
.code-secondary {
  color: #6078a9 !important;
}
.blue {
  background-color: #f8fbff !important;
}
.green {
  background-color: #d8ffcb !important;
}
.red {
  background-color: #ffe4e9 !important;
}
.white {
  background-color: #ffffff !important;
}
.border {
  border: 1px solid #e7ebf1;
}
.body1 {
  width: 50%;
  border: 0px solid;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
.body2 {
  width: 50%;
  border: 0px solid;
  text-align: right;
  div {
    padding: 3px 0;
  }
}

.fakeimg {
  /* // background-color: #aaa; */
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  img {
    border-radius: 50%;
  }
}

/* //   Code */
.code-row {
  display: flex;
  flex-wrap: wrap;
  /* // border: 1px solid #E7EBF1; */
  margin-bottom: 1.5rem;
}
.code-col0 {
  flex: 100%;
  padding: 5px;
  /* // border: 1px solid;   
    // background-color: white; */
}
.code-col1 {
  flex: 30px;
  text-align: right;
  padding: 5px;
  /* // background-color: #f1f1f1;
    // border: 1px solid; */
}
.code-col2 {
  flex: 30px;
  text-align: right;
  background-color: #f8fbff;
  padding: 5px;

  /* // border: 1px solid; */
}

.code-col3 {
  flex: calc(100% - 90px);
  padding: 5px;

  /* // border: 1px solid;     */
}
.col1 {
  text-align: right;
  padding: 5px;
}
.col2 {
  text-align: right;
  background-color: #f8fbff;
  padding: 5px;
}
.col3 {
  text-align: left;
  padding: 5px;
}

/* //   Expand/Collapes */
.collapsible {
  display: flex;
  /* // background-color: #777;
    // color: white; */
  cursor: pointer;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  /* // font-size: 15px; */
  padding: 5px 0;
}

.active,
.collapsible:hover {
  /* // background-color: #555; */
}
.collapsible::before {
  position: relative;
  top: 6px;
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 0.2em solid #999;
  border-top: 0.2em solid #999;
  transform: rotate(45deg);
  margin-right: 10px;
  margin-left: 5px;
}

.active::before {
  position: relative;
  top: 3px;
  content: "";
  display: inline-block;
  width: 8px;
  height: 8px;
  border-right: 0.2em solid #999;
  border-top: 0.2em solid #999;
  transform: rotate(135deg);
  margin-right: 10px;
  margin-left: 5px;
}

.content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #fff;
}
table {
  width: 100%;
  border-collapse: collapse;
}
@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}

.body-text {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
/* //   .header{
//       color: #39496A;
//       font-weight: 600;
//       font-size: 16px;
//       line-height: 24px;
//   } */
.monospace {
  font-family: "Courier New", bold;
  /* //   font-weight: bold; */
  font-size: 13px;
}
</style>
