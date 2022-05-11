# Web Compnent

## JS로 Web Component를 제작

Web Component Study
    - Core
        - Component.js
            - target => root의 id를 갖는다.
            - state => states들을 관리한다.
            - props => 상위 Commponent -> 하위 Compoent로 state를 전달받는다.

    - render
        - render함수가 호출되는 시기
            - 생성자 호출 시
            - state가 변경된 시점. 즉 setState가 호출된 시점
    
    - mounted
        - 추가적인 작업을 위해 필요한 함수
            - mounted에서 자식 컴포넌트를 mount 해줘야 한다.

    - addEvent
        - 추가될 Event를 처리
            - input: event type, selector, callback
            - target을 포함하거나 하위 요소에 selector가 더 있으면 이벤트 추가
            - const isTarget = (target) => children.includes(target) || target.closest(selector)