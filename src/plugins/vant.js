import Vue from 'vue'
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image as VanImage,
  Row,
  Col,
  Popup,
  Toast,
  Dialog,
  Field,
  Form,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  NavBar,
  List,
  PullRefresh,
  Swipe,
  SwipeItem,
  Lazyload,
  NoticeBar,
  Picker,
  DatetimePicker,
  Switch,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
  Stepper,
  Uploader,
  Search,
  Rate,
  Loading,
  DropdownMenu,
  DropdownItem,
  ActionSheet,
  Divider,
  Tag,
  Grid,
  GridItem,
  Collapse,
  CollapseItem,
  Sticky,
  SwipeCell,
  Circle,
  Card,
  Badge,
  CountDown,
  Empty,
  Pagination,
  Skeleton
} from 'vant'

// Register components
Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Row)
Vue.use(Col)
Vue.use(Popup)
Vue.use(Field)
Vue.use(Form)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Picker)
Vue.use(DatetimePicker)
Vue.use(Switch)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Stepper)
Vue.use(Uploader)
Vue.use(Search)
Vue.use(Rate)
Vue.use(Loading)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(ActionSheet)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Sticky)
Vue.use(SwipeCell)
Vue.use(Circle)
Vue.use(Card)
Vue.use(Badge)
Vue.use(CountDown)
Vue.use(Empty)
Vue.use(Pagination)
Vue.use(Skeleton)

// Register Lazyload directive
Vue.use(Lazyload)

// Register Toast and Dialog methods
Vue.prototype.$toast = Toast
Vue.prototype.$dialog = Dialog 