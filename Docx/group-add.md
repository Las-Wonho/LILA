# Group/add

## args

- GSC
- id
- password
- json

## input

```text
{
    GSC:'GroupKey',
    id:'GroupUserId',
    password:'GroupUserPassword',
    json:'UserMetaData'
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
`id`는 당신의 서비스의 회원아이디입니다. 이것으로 그룹에서 로그인 할 수 있습니다.
`password`는 당신 회원의 비밀번호입니다. 이것으로 그룹에서 로그인 할 수 있습니다.
`json`은 사용자의 데이터입니다. json형식이며 2000자까지 가능합니다. 로그인 시점에 이 데이터를 받게됩니다.

이 기능은 그룹에 새로운 유저를 추가하는 기능입니다. json은 유저의 데이터입니다. 기본적으로 json을 지원합니다. 여기서 유저를 추가해야 로그인을 할 수 있습니다. 즉, 회원가입 기능을 구현할 때 사용하게됩니다.