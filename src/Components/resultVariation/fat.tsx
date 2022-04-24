import React from "react";

export const Fat: React.FC = () => {
    return(
        <div>
        <ul className="radios-group">
            <li className="radio">
               <h3>
            Добавьте больше кардио в ваши тренировки
               </h3>
                   <span>Исходя из ваших параметров, вам следует уедлить внимание бегу, аэробным нагрузкам, а также многоповторным упражнениям. </span>
            </li>
            <li className="radio">
               <h3>
            Отдавайте предпочтение низкокалорийным продуктам
               </h3>
                   <span>Углеводы лучше принимать в утреннее время, перед этим выпив стакан воды. Выбирайте цельнозерновые продукты и постарайтесь исключить соусы из рациона. Не забывайте про клетчатку, она является важным продуктом для сбалансированной работы кишечника </span>
            </li>
            <li className="radio">
               <h3>
            Увеличьте интенсивность тренировок
               </h3>
                   <span> Попробуйте уменьшить время между упражнениями и повысьте общую интенсивность нагрузок во время тренировки. Старайтесь, по возможности, в течении дня прибегать к мелким физическим нагрузкам, например предпочесть подняться по лестнице вместо лифта.</span>
            </li>
        </ul>
        </div>
    )
}

