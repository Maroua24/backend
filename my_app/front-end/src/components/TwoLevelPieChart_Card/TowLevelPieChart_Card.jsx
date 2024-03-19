import { Statistic } from "../index";
import { MdReadMore } from "react-icons/md";
import { useState } from 'react';
import { PieChart, Pie , Bar, BarChart} from "recharts"
const TowLevelPieChart_Card = (props) => {
    const data = [
        { name: props.Key_name1, value: props.Key_value1, fill: '#d9b277' },
        { name: props.Key_name2, value: props.Key_value2, fill: '#a7cae6' },
        { name: props.Key_name3, value: props.Key_value3, fill: '#14F77A' },
    ]
    const [statistic, setstatistic] = useState(false);
    const click = () => {
        setstatistic(!statistic)
    }
    return (
        <>
            <div className="inline-block">
                <div className='bg-[--card-color] text-light-color m-6 ml-6 cursor-pointer h-16 w-56 font-Main-font transition duration-700 hover:border-2 border-inset border-royal-blue shadow-md' onClick={click}>
                    <p className='container'>{props.title}</p>
                    <button className='text-xs w-16 bg-Menu-hover border-b border-solid border-light-color border-r'>
                        <a href="" className="text-light-color">More Info</a>
                        <MdReadMore className='text-light-color ml-1 transform -rotate-90 hover:More-icon transition duration-700 transform rotate-0' />
                    </button>
                </div>

                {statistic && (
                    <div className="w-[230px] h-[270px] ml-5  mb-0 mt-30 border border-solid border-light-color bg-[--statistic-color] shadow-md ">
                        <PieChart width={200} height={140}>
                            <Pie
                                data={data}
                                dataKey="value"
                                cx="50%"
                                cy="50%"
                                innerRadius={40}
                                outerRadius={50}
                                label={{ fontSize: 10,}}
                            />
                        </PieChart>

                        <div className='m-neg-14 ml-3  mr-0'>
                            <Statistic color="#d9b277" details={props.Key_name1} />
                            <Statistic color="#a7cae6" details={props.Key_name2} />
                            <Statistic color="#14F77A" details={props.Key_name3} />
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default TowLevelPieChart_Card