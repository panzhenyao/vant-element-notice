import Vue from 'vue'
import {
  Button,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Select,
  Option,
  DatePicker,
  TimePicker,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Card,
  Loading,
  Message,
  MessageBox,
  Notification,
  Tabs,
  TabPane,
  Tag,
  Breadcrumb,
  BreadcrumbItem,
  Tooltip,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Slider,
  Upload,
  Avatar,
  Popover,
  Container,
  Header,
  Aside,
  Main,
  Footer
} from 'element-ui'

// Register components
Vue.use(Button)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Card)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tooltip)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Slider)
Vue.use(Upload)
Vue.use(Avatar)
Vue.use(Popover)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

// Register directives and services
Vue.use(Loading.directive)

// Register prototype methods
Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification 