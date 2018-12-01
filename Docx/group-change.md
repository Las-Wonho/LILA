# Group/change

## args

- GSC
- id
- json

## input

```text
{
    GSC:'YourGroutKey',
    id:'GroupUserName',
    json:'UserData'
}
```

## result

```JavaScript
{
    state:true
}
```

## desription

`GSC`는 그룹의 비밀키입니다. 이것으로 그룹을 특정합니다.
`id`는 당신의 서비스의 회원아이디입니다. 이것으로 그룹에서 로그인 할 수 있습니다. 여기서 어떤 회원인지 확인하는 단서로 사용됩니다.
`json`은 사용자의 데이터입니다. json형식이며 2000자까지 가능합니다. 로그인 시점에 이 데이터를 받게됩니다. 그 전에 등록해두었던 데이터는 지금 입력하는 데이터로 대채됩니다.

이 API는 유저의 데이터를 바꿀 때 사용합니다. ID와 Group_Sc로 회원을 특정하고 입력받은 json으로 데이터를 바꿉니다. 이 과정에서 id나 gsc가 잘못된다면 실패할 가능성이 있습니다. 만약 중복이 된 id가 있다면 바뀔지 알 수 없습니다.