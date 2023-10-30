<template>
  <div class="examplex" style="flex-direction: column;">
    <div id="vs-insert-container">
      <div id="vs-insert">
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="success">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="success"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="danger">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="danger"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="warning">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="warning"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="dark">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="dark"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
        <div class="examplex" style="height:200px;">
          <vs-button class="btnx withDropdown" type="filled" color="rgb(134, 4, 98)">Dropdown</vs-button>
          <vs-dropdown vs-trigger-click vs-insert="#vs-insert-container">
            <vs-button class="btn-drop" type="filled" icon="expand_more" color="rgb(134, 4, 98)"></vs-button>
            <!-- <a href="#">Hola mundo</a> -->

            <vs-dropdown-menu>
              <vs-dropdown-item>
                option 1
              </vs-dropdown-item>
              <vs-dropdown-item>
                option 2
              </vs-dropdown-item>
              <vs-dropdown-group>
                <vs-dropdown-item>
                  option 1
                </vs-dropdown-item>
                <vs-dropdown-item>
                  option 2
                </vs-dropdown-item>

              </vs-dropdown-group>
              <vs-dropdown-item divider>
                option 3
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
.vs-insert-box .box
  overflow:visible!important;
#vs-insert-container
  height: 400px;
  width: 100%;
  background-color: #fafafa;
  overflow: scroll;
  #vs-insert
    width: 100%;
.examplex
  display: flex;
  align-items: center;
  justify-content: center;
  .a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
</style>
