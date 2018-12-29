
/**
 * React生命周期拦截装饰器
 * @param {string} interceptLifeCycle 拦截的生命周期函数
 */
export default function withIntercept(interceptLifeCycle) {
    if (!interceptLifeCycle) {
        return Component => Component
    } else {
        return function (Component) {
            return class extends Component {
                [interceptLifeCycle]() {
                    //do somthing...
                    super[interceptLifeCycle]()
                }
            }
        }
    }
}