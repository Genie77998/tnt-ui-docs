/*
* @Author: wj77998
* @Date:   2017-03-16 15:58:51
* @Email:  wj77998@qq.com
* @Last Modified by:   wj77998
* @Last Modified time: 2017-06-27 10:12:59
*/

'use strict';

import React, { Component, PropTypes } from 'react'
import Code from './code'
import {TntSelect} from 'tnt-ui'

class Lover extends React.Component {
	constructor (props) {
	    super(props)
        this.state = {
        	defaultData : this.props.defaultData || [["打球","听音乐","唱歌","跳舞"]],
        	defaultValue : [],
        	theme : this.props.theme  || "ios",
        	value : ""
        };
        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
	}
	onSelect(opt){
		let _res = [];
		opt.forEach(function(val){
			_res.push(val.value)
		});
		this.setState({
			defaultValue : _res,
			value : _res.join(' ')
		});

	}
	onClick(){
		this.refs["slectPro"].show();
	}
	render(){
		const { onClick  , onSelect , onChange} = this;
		const { defaultValue , defaultData, value ,  theme} = this.state;
		return (
			<div>
				<input 
					type="text"
					onClick={onClick}
					value={value}
					placeholder="选择爱好"
					readOnly
				/>
				<TntSelect 
					ref="slectPro"
					theme={theme}
					onSelect={onSelect}
				  	defaultData={defaultData} 
				  	defaultValues={defaultValue}
				  	onChange={onChange}
				  />
			</div>
			
		)
	}
}

const cityJson = [{
     "city": {
         "0": {
             "area": {
                 "0": {
                     "name": "西湖区",
                     "id": "23"
                 },
                 "1": {
                     "name": "江干区",
                     "id": "26"
                 },
                 "2": {
                     "name": "滨江区",
                     "id": "27"
                 },
                 "3": {
                     "name": "富阳市",
                     "id": "64"
                 },
                 "4": {
                     "name": "下城区",
                     "id": "66"
                 },
                 "5": {
                     "name": "拱墅区",
                     "id": "67"
                 },
                 "6": {
                     "name": "上城区",
                     "id": "86"
                 },
                 "7": {
                     "name": "萧山区",
                     "id": "87"
                 },
                 "8": {
                     "name": "余杭区",
                     "id": "88"
                 },
                 "9": {
                     "name": "建德市",
                     "id": "2498"
                 },
                 "10": {
                     "name": "临安市",
                     "id": "2501"
                 },
                 "11": {
                     "name": "桐庐县",
                     "id": "2502"
                 },
                 "12": {
                     "name": "淳安县",
                     "id": "2503"
                 },
                 "13": {
                     "name": "其它区",
                     "id": "4038"
                 }
             },
             "name": "杭州市",
             "id": "22"
         },
         "1": {
             "area": {
                 "0": {
                     "name": "苍南县",
                     "id": "25"
                 },
                 "1": {
                     "name": "鹿城区",
                     "id": "2506"
                 },
                 "2": {
                     "name": "龙湾区",
                     "id": "2507"
                 },
                 "3": {
                     "name": "瓯海区",
                     "id": "2508"
                 },
                 "4": {
                     "name": "瑞安市",
                     "id": "2509"
                 },
                 "5": {
                     "name": "乐清市",
                     "id": "2510"
                 },
                 "6": {
                     "name": "永嘉县",
                     "id": "2511"
                 },
                 "7": {
                     "name": "平阳县",
                     "id": "2513"
                 },
                 "8": {
                     "name": "泰顺县",
                     "id": "2514"
                 },
                 "9": {
                     "name": "文成县",
                     "id": "2515"
                 },
                 "10": {
                     "name": "洞头县",
                     "id": "2516"
                 },
                 "11": {
                     "name": "其它区",
                     "id": "4624"
                 }
             },
             "name": "温州市",
             "id": "24"
         },
         "2": {
             "area": {
                 "0": {
                     "name": "海曙区",
                     "id": "2450"
                 },
                 "1": {
                     "name": "江东区",
                     "id": "2461"
                 },
                 "2": {
                     "name": "江北区",
                     "id": "2463"
                 },
                 "3": {
                     "name": "鄞州区",
                     "id": "2465"
                 },
                 "4": {
                     "name": "北仑区",
                     "id": "2468"
                 },
                 "5": {
                     "name": "镇海区",
                     "id": "2469"
                 },
                 "6": {
                     "name": "余姚市",
                     "id": "2471"
                 },
                 "7": {
                     "name": "慈溪市",
                     "id": "2473"
                 },
                 "8": {
                     "name": "奉化市",
                     "id": "2475"
                 },
                 "9": {
                     "name": "象山县",
                     "id": "2478"
                 },
                 "10": {
                     "name": "宁海县",
                     "id": "2480"
                 },
                 "11": {
                     "name": "其他区",
                     "id": "3809"
                 },
                 "12": {
                     "name": "高新区",
                     "id": "8144"
                 }
             },
             "name": "宁波市",
             "id": "357"
         },
         "3": {
             "area": {
                 "0": {
                     "name": "南湖区",
                     "id": "2517"
                 },
                 "1": {
                     "name": "秀洲区",
                     "id": "2518"
                 },
                 "2": {
                     "name": "嘉兴开发区",
                     "id": "2519"
                 },
                 "3": {
                     "name": "嘉善县",
                     "id": "2520"
                 },
                 "4": {
                     "name": "平湖市",
                     "id": "2521"
                 },
                 "5": {
                     "name": "海宁市",
                     "id": "2522"
                 },
                 "6": {
                     "name": "海盐县",
                     "id": "2523"
                 },
                 "7": {
                     "name": "桐乡市",
                     "id": "2524"
                 },
                 "8": {
                     "name": "其他区",
                     "id": "5184"
                 }
             },
             "name": "嘉兴市",
             "id": "360"
         },
         "4": {
             "area": {
                 "0": {
                     "name": "吴兴区",
                     "id": "2525"
                 },
                 "1": {
                     "name": "南浔区",
                     "id": "2526"
                 },
                 "2": {
                     "name": "长兴县",
                     "id": "2527"
                 },
                 "3": {
                     "name": "德清县",
                     "id": "2529"
                 },
                 "4": {
                     "name": "安吉县",
                     "id": "2530"
                 }
             },
             "name": "湖州市",
             "id": "361"
         }
     },
     "name": "浙江省",
     "id": "21"
 }, {
     "city": {
         "0": {
             "area": {
                 "0": {
                     "name": "黄浦区",
                     "id": "170"
                 },
                 "1": {
                     "name": "卢湾区",
                     "id": "171"
                 },
                 "2": {
                     "name": "徐汇区",
                     "id": "172"
                 },
                 "3": {
                     "name": "长宁区",
                     "id": "173"
                 },
                 "4": {
                     "name": "静安区",
                     "id": "174"
                 },
                 "5": {
                     "name": "普陀区",
                     "id": "175"
                 },
                 "6": {
                     "name": "闸北区",
                     "id": "176"
                 },
                 "7": {
                     "name": "虹口区",
                     "id": "177"
                 },
                 "8": {
                     "name": "杨浦区",
                     "id": "178"
                 },
                 "9": {
                     "name": "闵行区",
                     "id": "179"
                 },
                 "10": {
                     "name": "宝山区",
                     "id": "180"
                 },
                 "11": {
                     "name": "嘉定区",
                     "id": "181"
                 },
                 "12": {
                     "name": "浦东新区",
                     "id": "182"
                 },
                 "13": {
                     "name": "金山区",
                     "id": "183"
                 },
                 "14": {
                     "name": "松江区",
                     "id": "184"
                 },
                 "15": {
                     "name": "青浦区",
                     "id": "185"
                 },
                 "16": {
                     "name": "南汇区",
                     "id": "186"
                 },
                 "17": {
                     "name": "奉贤区",
                     "id": "187"
                 },
                 "18": {
                     "name": "崇明县",
                     "id": "188"
                 },
                 "19": {
                     "name": "其它区",
                     "id": "4188"
                 },
                 "20": {
                     "name": "川沙区",
                     "id": "7284"
                 }
             },
             "name": "上海市",
             "id": "72"
         }
     },
     "name": "上海",
     "id": "30"
 }, {
     "city": {
         "0": {
             "area": {
                 "0": {
                     "name": "渝中区",
                     "id": "60"
                 },
                 "1": {
                     "name": "江北区",
                     "id": "61"
                 },
                 "2": {
                     "name": "渝北区",
                     "id": "62"
                 },
                 "3": {
                     "name": "南岸区",
                     "id": "63"
                 },
                 "4": {
                     "name": "九龙坡区",
                     "id": "65"
                 },
                 "5": {
                     "name": "巴南区",
                     "id": "68"
                 },
                 "6": {
                     "name": "永川区",
                     "id": "99"
                 },
                 "7": {
                     "name": "江津区",
                     "id": "100"
                 },
                 "8": {
                     "name": "大足县",
                     "id": "101"
                 },
                 "9": {
                     "name": "合川区",
                     "id": "102"
                 },
                 "10": {
                     "name": "潼南县",
                     "id": "103"
                 },
                 "11": {
                     "name": "铜梁县",
                     "id": "104"
                 },
                 "12": {
                     "name": "荣昌县",
                     "id": "105"
                 },
                 "13": {
                     "name": "壁山县",
                     "id": "106"
                 },
                 "14": {
                     "name": "綦江县",
                     "id": "107"
                 }
             },
             "name": "重庆市",
             "id": "59"
         }
     },
     "name": "重庆",
     "id": "123"
 }]
let province = [];
let city = [];
let area = [];

function findSelectArray(value){
	province = [];
	city = [];
	area = [];
	value = value || [];
	let _pro = "", _city = "" , _area = "" , _proKey = 0 , _cityObj = {} , _areaObj = {};
	cityJson.forEach(function(val,key){
		province.push(val.name);
		if(val.name == value[0] && typeof value[0] != "undefined" && value[0] != ""){
			_pro = val.name;
			_proKey = key;
		}
	});
	if(_pro == ""){
		_pro = cityJson[0].name;
		_proKey = 0;
	}
	if(cityJson[_proKey] && cityJson[_proKey].city){
		let _ctArr = cityJson[_proKey].city;
		for (let prop in _ctArr) {
			if (_ctArr.hasOwnProperty(prop)) {
				let _ctArrCity = _ctArr[prop]
				city.push(_ctArrCity.name);
				if(_ctArrCity.name == value[1] && typeof value[1] != "undefined" && value[1] != ""){
					_cityObj = _ctArrCity;
					_city = _cityObj.name;
				}
			}
		}
		if(_city == ""){
			_cityObj = _ctArr[0];
			_city = _cityObj.name
		}
		
	}
	
	if(_cityObj && _cityObj.area){
		for (let props in _cityObj.area) {
			if (_cityObj.area.hasOwnProperty(props)) {
				let _areaItem = _cityObj.area[props];
				area.push(_areaItem.name);
				if(_areaItem.name == value[2] && typeof value[2] != "undefined" && value[2] != ""){
					_areaObj = _areaItem;
					_area = _areaObj.name
				}
			}
		}
		if(_area == ""){
			_areaObj = _cityObj.area[0];
			_area = _areaObj.name
		}
	}
	return [_pro,_city,_area]
}

class Region extends React.Component {
	constructor (props) {
	    super(props)
        this.state = {
        	defaultData : [],
        	defaultValue : [],
            defV : [],
        	value : ""
        };
        this.onClick = this.onClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onChange = this.onChange.bind(this);
	}
	componentDidMount(){
		const _defaultValue = findSelectArray();
		this.setState({
			value : _defaultValue.join(' '),
			defaultValue : _defaultValue,
            defV : _defaultValue,
			defaultData : [province,city,area]
		})
	}
	onSelect(opt){
		let _res = [];
		opt.forEach(function(val){
			_res.push(val.value)
		});
		this.setState({
			defaultValue : _res,
            defV : _res,
			value : _res.join(' ')
		});

	}
	onChange(val,index,key){
		let { defaultValue } = this.state;
		if(defaultValue[key] !== val){
			if(key == 0){
				const _defaultValue = findSelectArray([val]);
				this.setState({ 
					defaultValue : _defaultValue,  
					defaultData : [province,city,area]
				});
			}
			if(key == 1){
				const _defaultValue = findSelectArray([defaultValue[0],val]);
				this.setState({ 
					defaultValue : _defaultValue,  
					defaultData : [province,city,area]
				});
			}
		}
	}
	onClick(){
        const { defV } = this.state;
        const _defaultValue = findSelectArray(defV);
        this.setState({ 
            defaultValue : _defaultValue,  
            defaultData : [province,city,area]
        });
		this.refs["slectPro"].show();
	}
	render(){
		const { onClick  , onSelect , onChange} = this;
		const { defaultValue , defaultData, value } = this.state;
		return (
			<div>
				<input 
					type="text"
					onClick={onClick}
					value={value}
					readOnly
				/>
				<TntSelect 
					ref="slectPro"
					onSelect={onSelect}
				  	defaultData={defaultData} 
				  	defaultValues={defaultValue}
				  	onChange={onChange}
				  />
			</div>
			
		)
	}
}


export default class Select extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="header">
		          <h1>Select</h1>
		        </div>
		        <Code
                    toggleView = {false}
                >
{`
    import { TntSelet } from 'tnt-ui'
    \n
<TntSelet 
        defaultData : PropTypes.array, //列表值
        defaultValues : PropTypes.array, //默认值
        buttons : PropTypes.array,//按钮文字
        theme : PropTypes.string,//主题样式
        prefixCls :  PropTypes.string,//样式前缀
        onChange: PropTypes.func, //滑动之后的事件
        onClose : PropTypes.func, //点击取消事件
        onSelect : PropTypes.func, //点击确定事件
        className: PropTypes.string,//额外类名
        style: PropTypes.object,//最外层style
        isOpen : PropTypes.bool //是否默认显示
/>
`}
				</Code>
				<h2>Example1</h2>
				<div className="docs-example">
					<span>单项：</span>
					<Lover />
					<p style={{height:30}} />
					<span>多项：</span>
					<Lover 
						defaultData ={[["打球","听音乐","唱歌","跳舞"] , ["英雄联盟","穿越火线","战地之王","王者荣耀","火影忍者","传奇","剑侠情缘","天龙八部","守望先锋","其他"]]}
						theme={"dark"}
					/>
				</div>
				<Code>
{`
	class Lover extends React.Component {
		constructor (props) {
		    super(props)
	        this.state = {
	        	defaultData : this.props.defaultData || [["打球","听音乐","唱歌","跳舞"]],
	        	defaultValue : [],
	        	theme : this.props.theme  || "ios",
	        	value : ""
	        };
	        this.onClick = this.onClick.bind(this);
	        this.onSelect = this.onSelect.bind(this);
		}
		onSelect(opt){
			let _res = [];
			opt.forEach(function(val){
				_res.push(val.value)
			});
			this.setState({
				defaultValue : _res,
				value : _res.join(' ')
			});

		}
		onClick(){
			this.refs["slectPro"].show();
		}
		render(){
			const { onClick  , onSelect , onChange} = this;
			const { defaultValue , defaultData, value ,  theme} = this.state;
			return (
				<div>
					<input 
						type="text"
						onClick={onClick}
						value={value}
						placeholder="选择爱好"
						readOnly
					/>
					<TntSelect 
						ref="slectPro"
						theme={theme}
						onSelect={onSelect}
					  	defaultData={defaultData} 
					  	defaultValues={defaultValue}
					  	onChange={onChange}
					  />
				</div>
				
			)
		}
	}

	render:
	<div className="docs-example">
		<span>单项：</span><Lover />
		<span>多项：</span><Lover 
			defaultData ={[["打球","听音乐","唱歌","跳舞"] , ["英雄联盟","穿越火线","战地之王","王者荣耀","火影忍者","传奇","剑侠情缘","天龙八部","守望先锋","其他"]]}
			theme={"dark"}
		/>
	</div>
`}
				</Code>
				<h2>Example2</h2>
				<div className="docs-example">
					<span>选择地区：</span>
					<Region/>
				</div>
				<Code>
{`
	const cityJson = [{
	    "city": {
	         "0": {
	             "area": {
	                 "0": {
	                     "name": "西湖区",
	                     "id": "23"
	                 },
	                 "1": {
	                     "name": "江干区",
	                     "id": "26"
	                 },
	                 "2": {
	                     "name": "滨江区",
	                     "id": "27"
	                 },
	                 "3": {
	                     "name": "富阳市",
	                     "id": "64"
	                 },
	                 "4": {
	                     "name": "下城区",
	                     "id": "66"
	                 },
	                 "5": {
	                     "name": "拱墅区",
	                     "id": "67"
	                 },
	                 "6": {
	                     "name": "上城区",
	                     "id": "86"
	                 },
	                 "7": {
	                     "name": "萧山区",
	                     "id": "87"
	                 },
	                 "8": {
	                     "name": "余杭区",
	                     "id": "88"
	                 },
	                 "9": {
	                     "name": "建德市",
	                     "id": "2498"
	                 },
	                 "10": {
	                     "name": "临安市",
	                     "id": "2501"
	                 },
	                 "11": {
	                     "name": "桐庐县",
	                     "id": "2502"
	                 },
	                 "12": {
	                     "name": "淳安县",
	                     "id": "2503"
	                 },
	                 "13": {
	                     "name": "其它区",
	                     "id": "4038"
	                 }
	             },
	             "name": "杭州市",
	             "id": "22"
	         },
	         "1": {
	             "area": {
	                 "0": {
	                     "name": "苍南县",
	                     "id": "25"
	                 },
	                 "1": {
	                     "name": "鹿城区",
	                     "id": "2506"
	                 },
	                 "2": {
	                     "name": "龙湾区",
	                     "id": "2507"
	                 },
	                 "3": {
	                     "name": "瓯海区",
	                     "id": "2508"
	                 },
	                 "4": {
	                     "name": "瑞安市",
	                     "id": "2509"
	                 },
	                 "5": {
	                     "name": "乐清市",
	                     "id": "2510"
	                 },
	                 "6": {
	                     "name": "永嘉县",
	                     "id": "2511"
	                 },
	                 "7": {
	                     "name": "平阳县",
	                     "id": "2513"
	                 },
	                 "8": {
	                     "name": "泰顺县",
	                     "id": "2514"
	                 },
	                 "9": {
	                     "name": "文成县",
	                     "id": "2515"
	                 },
	                 "10": {
	                     "name": "洞头县",
	                     "id": "2516"
	                 },
	                 "11": {
	                     "name": "其它区",
	                     "id": "4624"
	                 }
	             },
	             "name": "温州市",
	             "id": "24"
	         },
	         "2": {
	             "area": {
	                 "0": {
	                     "name": "海曙区",
	                     "id": "2450"
	                 },
	                 "1": {
	                     "name": "江东区",
	                     "id": "2461"
	                 },
	                 "2": {
	                     "name": "江北区",
	                     "id": "2463"
	                 },
	                 "3": {
	                     "name": "鄞州区",
	                     "id": "2465"
	                 },
	                 "4": {
	                     "name": "北仑区",
	                     "id": "2468"
	                 },
	                 "5": {
	                     "name": "镇海区",
	                     "id": "2469"
	                 },
	                 "6": {
	                     "name": "余姚市",
	                     "id": "2471"
	                 },
	                 "7": {
	                     "name": "慈溪市",
	                     "id": "2473"
	                 },
	                 "8": {
	                     "name": "奉化市",
	                     "id": "2475"
	                 },
	                 "9": {
	                     "name": "象山县",
	                     "id": "2478"
	                 },
	                 "10": {
	                     "name": "宁海县",
	                     "id": "2480"
	                 },
	                 "11": {
	                     "name": "其他区",
	                     "id": "3809"
	                 },
	                 "12": {
	                     "name": "高新区",
	                     "id": "8144"
	                 }
	             },
	             "name": "宁波市",
	             "id": "357"
	         },
	         "3": {
	             "area": {
	                 "0": {
	                     "name": "南湖区",
	                     "id": "2517"
	                 },
	                 "1": {
	                     "name": "秀洲区",
	                     "id": "2518"
	                 },
	                 "2": {
	                     "name": "嘉兴开发区",
	                     "id": "2519"
	                 },
	                 "3": {
	                     "name": "嘉善县",
	                     "id": "2520"
	                 },
	                 "4": {
	                     "name": "平湖市",
	                     "id": "2521"
	                 },
	                 "5": {
	                     "name": "海宁市",
	                     "id": "2522"
	                 },
	                 "6": {
	                     "name": "海盐县",
	                     "id": "2523"
	                 },
	                 "7": {
	                     "name": "桐乡市",
	                     "id": "2524"
	                 },
	                 "8": {
	                     "name": "其他区",
	                     "id": "5184"
	                 }
	             },
	             "name": "嘉兴市",
	             "id": "360"
	         },
	         "4": {
	             "area": {
	                 "0": {
	                     "name": "吴兴区",
	                     "id": "2525"
	                 },
	                 "1": {
	                     "name": "南浔区",
	                     "id": "2526"
	                 },
	                 "2": {
	                     "name": "长兴县",
	                     "id": "2527"
	                 },
	                 "3": {
	                     "name": "德清县",
	                     "id": "2529"
	                 },
	                 "4": {
	                     "name": "安吉县",
	                     "id": "2530"
	                 }
	             },
	             "name": "湖州市",
	             "id": "361"
	         }
	    },
	    "name": "浙江省",
	    "id": "21"
	}, {
	    "city": {
	        "0": {
	             "area": {
	                 "0": {
	                     "name": "黄浦区",
	                     "id": "170"
	                 },
	                 "1": {
	                     "name": "卢湾区",
	                     "id": "171"
	                 },
	                 "2": {
	                     "name": "徐汇区",
	                     "id": "172"
	                 },
	                 "3": {
	                     "name": "长宁区",
	                     "id": "173"
	                 },
	                 "4": {
	                     "name": "静安区",
	                     "id": "174"
	                 },
	                 "5": {
	                     "name": "普陀区",
	                     "id": "175"
	                 },
	                 "6": {
	                     "name": "闸北区",
	                     "id": "176"
	                 },
	                 "7": {
	                     "name": "虹口区",
	                     "id": "177"
	                 },
	                 "8": {
	                     "name": "杨浦区",
	                     "id": "178"
	                 },
	                 "9": {
	                     "name": "闵行区",
	                     "id": "179"
	                 },
	                 "10": {
	                     "name": "宝山区",
	                     "id": "180"
	                 },
	                 "11": {
	                     "name": "嘉定区",
	                     "id": "181"
	                 },
	                 "12": {
	                     "name": "浦东新区",
	                     "id": "182"
	                 },
	                 "13": {
	                     "name": "金山区",
	                     "id": "183"
	                 },
	                 "14": {
	                     "name": "松江区",
	                     "id": "184"
	                 },
	                 "15": {
	                     "name": "青浦区",
	                     "id": "185"
	                 },
	                 "16": {
	                     "name": "南汇区",
	                     "id": "186"
	                 },
	                 "17": {
	                     "name": "奉贤区",
	                     "id": "187"
	                 },
	                 "18": {
	                     "name": "崇明县",
	                     "id": "188"
	                 },
	                 "19": {
	                     "name": "其它区",
	                     "id": "4188"
	                 },
	                 "20": {
	                     "name": "川沙区",
	                     "id": "7284"
	                 }
	             },
	             "name": "上海市",
	             "id": "72"
	         }
	     },
	     "name": "上海",
	     "id": "30"
	 }, {
	     "city": {
	         "0": {
	             "area": {
	                 "0": {
	                     "name": "渝中区",
	                     "id": "60"
	                 },
	                 "1": {
	                     "name": "江北区",
	                     "id": "61"
	                 },
	                 "2": {
	                     "name": "渝北区",
	                     "id": "62"
	                 },
	                 "3": {
	                     "name": "南岸区",
	                     "id": "63"
	                 },
	                 "4": {
	                     "name": "九龙坡区",
	                     "id": "65"
	                 },
	                 "5": {
	                     "name": "巴南区",
	                     "id": "68"
	                 },
	                 "6": {
	                     "name": "永川区",
	                     "id": "99"
	                 },
	                 "7": {
	                     "name": "江津区",
	                     "id": "100"
	                 },
	                 "8": {
	                     "name": "大足县",
	                     "id": "101"
	                 },
	                 "9": {
	                     "name": "合川区",
	                     "id": "102"
	                 },
	                 "10": {
	                     "name": "潼南县",
	                     "id": "103"
	                 },
	                 "11": {
	                     "name": "铜梁县",
	                     "id": "104"
	                 },
	                 "12": {
	                     "name": "荣昌县",
	                     "id": "105"
	                 },
	                 "13": {
	                     "name": "壁山县",
	                     "id": "106"
	                 },
	                 "14": {
	                     "name": "綦江县",
	                     "id": "107"
	                 }
	             },
	             "name": "重庆市",
	             "id": "59"
	         }
	     },
	     "name": "重庆",
	     "id": "123"
	 }]
	let province = [];
	let city = [];
	let area = [];

	function findSelectArray(value){
		province = [];
		city = [];
		area = [];
		value = value || [];
		let _pro = "", _city = "" , _area = "" , _proKey = 0 , _cityObj = {} , _areaObj = {};
		cityJson.forEach(function(val,key){
			province.push(val.name);
			if(val.name == value[0] && typeof value[0] != "undefined" && value[0] != ""){
				_pro = val.name;
				_proKey = key;
			}
		});
		if(_pro == ""){
			_pro = cityJson[0].name;
			_proKey = 0;
		}
		if(cityJson[_proKey] && cityJson[_proKey].city){
			let _ctArr = cityJson[_proKey].city;
			for (let prop in _ctArr) {
				if (_ctArr.hasOwnProperty(prop)) {
					let _ctArrCity = _ctArr[prop]
					city.push(_ctArrCity.name);
					if(_ctArrCity.name == value[1] && typeof value[1] != "undefined" && value[1] != ""){
						_cityObj = _ctArrCity;
						_city = _cityObj.name;
					}
				}
			}
			if(_city == ""){
				_cityObj = _ctArr[0];
				_city = _cityObj.name
			}
			
		}
		
		if(_cityObj && _cityObj.area){
			for (let props in _cityObj.area) {
				if (_cityObj.area.hasOwnProperty(props)) {
					let _areaItem = _cityObj.area[props];
					area.push(_areaItem.name);
					if(_areaItem.name == value[2] && typeof value[2] != "undefined" && value[2] != ""){
						_areaObj = _areaItem;
						_area = _areaObj.name
					}
				}
			}
			if(_area == ""){
				_areaObj = _cityObj.area[0];
				_area = _areaObj.name
			}
		}
		return [_pro,_city,_area]
	}

	class Region extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                defaultData : [],
                defaultValue : [],
                defV : [],
                value : ""
            };
            this.onClick = this.onClick.bind(this);
            this.onSelect = this.onSelect.bind(this);
            this.onChange = this.onChange.bind(this);
        }
        componentDidMount(){
            const _defaultValue = findSelectArray();
            this.setState({
                value : _defaultValue.join(' '),
                defaultValue : _defaultValue,
                defV : _defaultValue,
                defaultData : [province,city,area]
            })
        }
        onSelect(opt){
            let _res = [];
            opt.forEach(function(val){
                _res.push(val.value)
            });
            this.setState({
                defaultValue : _res,
                defV : _res,
                value : _res.join(' ')
            });

        }
        onChange(val,index,key){
            let { defaultValue } = this.state;
            if(defaultValue[key] !== val){
                if(key == 0){
                    const _defaultValue = findSelectArray([val]);
                    this.setState({ 
                        defaultValue : _defaultValue,  
                        defaultData : [province,city,area]
                    });
                }
                if(key == 1){
                    const _defaultValue = findSelectArray([defaultValue[0],val]);
                    this.setState({ 
                        defaultValue : _defaultValue,  
                        defaultData : [province,city,area]
                    });
                }
            }
        }
        onClick(){
            const { defV } = this.state;
            const _defaultValue = findSelectArray(defV);
            this.setState({ 
                defaultValue : _defaultValue,  
                defaultData : [province,city,area]
            });
            this.refs["slectPro"].show();
        }
        render(){
            const { onClick  , onSelect , onChange} = this;
            const { defaultValue , defaultData, value } = this.state;
            return (
                <div>
                    <input 
                        type="text"
                        onClick={onClick}
                        value={value}
                        readOnly
                    />
                    <TntSelect 
                        ref="slectPro"
                        onSelect={onSelect}
                        defaultData={defaultData} 
                        defaultValues={defaultValue}
                        onChange={onChange}
                      />
                </div>
                
            )
        }
    }
`}
				</Code>
			</div>
		);
	}
}
