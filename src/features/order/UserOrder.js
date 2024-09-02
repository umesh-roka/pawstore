import React from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../../Api/orderApi';
import { Button, Card, Typography } from "@material-tailwind/react";
import { useNavigate } from 'react-router';


const TABLE_HEAD = ["ProductId", "Total", "CreatedAt", ''];

const UserOrder = () => {
  const nav = useNavigate();
  const {user}= useSelector((state)=>state.userSlice);
  const{data} = useGetOrderByUserQuery(user);
  console.log(user);
  console.log(data);

  return (
    <div className=' sm:w-[400px] col-span-2'>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data.map(({ total, createdAt, _id, }, index) => {
            const isLast = index === data.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={_id}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {_id}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {total}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {createdAt}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <Button
                      onClick={() => nav(`/order/${_id}`)} 
                      size='sm' color='green'>Detail</Button>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>


  </div>
  )
}

export default UserOrder;
