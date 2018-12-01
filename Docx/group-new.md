# Group/new

## args

- SC
- name

## input

```text
{
    SC:'YourKey',
    name:'GroupName'
}
```

## result

```JavaScript
{
    state:true,
    GSC:0932b4d24f8acb7eb7a
}
```

## Discription

`SC`는 사용자의 비밀키입니다. 처음 아이디를 만드실때 받으셨을겁니다.
`name`은 그룹의 이름입니다. 그룸의 이름은 중복이 불가능합니다.

*전부 string형태로 제공해야합니다.* 그룹 생성이 완료되었으면 상태와 그룹 비밀키가 지급됩니다. 그룹 비밀키로 그룹을 이용할 수 있습니다. 여기서 그룹을 생성해야지 이용이 가능합니다.