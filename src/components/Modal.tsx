import React from 'react'

/**
* 이거.. 이거 알아내는데 고생했다.. 기억하자.
* @README: 부모 component에서 자식으로 state값을 보낼 때는 이렇게 작성한다.
* @EX <Modal value={state} ccc={target} />
**/
interface Props {
    value: {
        isOpen: boolean;
        count: number;
        name: string;
    };

    data: {
        data: string;
    }
}

const Modal = ({value: { isOpen, count, name }, data: { data }}: Props) => {

    return (
        <>
            <div>
                {count}
            </div>
            <div>
                {name}
            </div>
            <div>
                {data}
            </div>
            {
                isOpen && <div>모달입니다.</div>
            }
        </>
    )
}

export default Modal