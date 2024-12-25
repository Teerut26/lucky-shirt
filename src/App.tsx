import { parse, isToday } from "date-fns"
import { formatInTimeZone } from 'date-fns-tz'
import { th } from 'date-fns/locale'
import data from "./assets/data.json"

export default function App() {
    const currentDay = data.data.find(item => isToday(parse(item.dayEn, "cccc", new Date())))
    const negativeColor = currentDay?.colors.find(color => color.isNegative)
    const nonNegativeColors = currentDay?.colors.filter(color => !color.isNegative)
    return (
        <div className="min-h-screen flex justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="mt-3 text-zinc-500">
                    {formatInTimeZone(new Date(), "Asia/Bangkok", "วันeeeeที่ d MMMM yyyy เวลา HH:mm", {
                        locale: th,
                    })}
                </div>
                <div className="text-2xl font-bold">{currentDay?.dayTh}</div>
                <div className="flex flex-col items-center">
                    <div className="text-red-500 font-bold">{negativeColor?.category}</div>
                    <div className="flex">
                        {negativeColor?.colors.map(color => (
                            <div
                                key={color.name}
                                className="p-3"
                                style={{ backgroundColor: color.hex }}
                            >{color.name}</div>
                        ))}
                    </div>
                </div>
                {nonNegativeColors?.map(category => (
                    <div className="flex flex-col items-center">
                        <div>{category.category}</div>
                        <div className="flex">
                            {category.colors.map(color => (
                                <div
                                    key={color.name}
                                    className="p-3"
                                    style={{ backgroundColor: color.hex }}
                                >{color.name}</div>
                            ))}
                        </div>
                    </div>
                ))}
                <img src="https://s.isanook.com/ho/0/ud/10/52457/horo_1.jpg" alt="" />
            </div>
        </div>
    )
}