import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/work_orders/work_ordersSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

import { hasPermission } from '../../helpers/userPermissions';

const Work_ordersView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { work_orders } = useAppSelector((state) => state.work_orders);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View work_orders')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View work_orders')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>OrderNumber</p>
            <p>{work_orders?.order_number}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Materials</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Quantity</th>

                      <th>ReorderLevel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {work_orders.materials &&
                      Array.isArray(work_orders.materials) &&
                      work_orders.materials.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/raw_materials/raw_materials-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='quantity'>{item.quantity}</td>

                          <td data-label='reorder_level'>
                            {item.reorder_level}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!work_orders?.materials?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Labor</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>

                      <th>Last Name</th>

                      <th>Phone Number</th>

                      <th>E-Mail</th>

                      <th>Disabled</th>
                    </tr>
                  </thead>
                  <tbody>
                    {work_orders.labor &&
                      Array.isArray(work_orders.labor) &&
                      work_orders.labor.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/users/users-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='firstName'>{item.firstName}</td>

                          <td data-label='lastName'>{item.lastName}</td>

                          <td data-label='phoneNumber'>{item.phoneNumber}</td>

                          <td data-label='email'>{item.email}</td>

                          <td data-label='disabled'>
                            {dataFormatter.booleanFormatter(item.disabled)}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!work_orders?.labor?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <>
            <p className={'block font-bold mb-2'}>Machinery</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>MachineName</th>

                      <th>MaintenanceSchedule</th>

                      <th>LastMaintenanceDate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {work_orders.machinery &&
                      Array.isArray(work_orders.machinery) &&
                      work_orders.machinery.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(
                              `/machinery/machinery-view/?id=${item.id}`,
                            )
                          }
                        >
                          <td data-label='machine_name'>{item.machine_name}</td>

                          <td data-label='maintenance_schedule'>
                            {item.maintenance_schedule}
                          </td>

                          <td data-label='last_maintenance'>
                            {dataFormatter.dateTimeFormatter(
                              item.last_maintenance,
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!work_orders?.machinery?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <FormField label='StartDate'>
            {work_orders.start_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  work_orders.start_date
                    ? new Date(
                        dayjs(work_orders.start_date).format(
                          'YYYY-MM-DD hh:mm',
                        ),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No StartDate</p>
            )}
          </FormField>

          <FormField label='EndDate'>
            {work_orders.end_date ? (
              <DatePicker
                dateFormat='yyyy-MM-dd hh:mm'
                showTimeSelect
                selected={
                  work_orders.end_date
                    ? new Date(
                        dayjs(work_orders.end_date).format('YYYY-MM-DD hh:mm'),
                      )
                    : null
                }
                disabled
              />
            ) : (
              <p>No EndDate</p>
            )}
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>organizations</p>

            <p>{work_orders?.organizations?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Quality_control WorkOrder</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>CheckName</th>

                      <th>Passed</th>

                      <th>CheckDate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {work_orders.quality_control_work_order &&
                      Array.isArray(work_orders.quality_control_work_order) &&
                      work_orders.quality_control_work_order.map(
                        (item: any) => (
                          <tr
                            key={item.id}
                            onClick={() =>
                              router.push(
                                `/quality_control/quality_control-view/?id=${item.id}`,
                              )
                            }
                          >
                            <td data-label='check_name'>{item.check_name}</td>

                            <td data-label='passed'>
                              {dataFormatter.booleanFormatter(item.passed)}
                            </td>

                            <td data-label='check_date'>
                              {dataFormatter.dateTimeFormatter(item.check_date)}
                            </td>
                          </tr>
                        ),
                      )}
                  </tbody>
                </table>
              </div>
              {!work_orders?.quality_control_work_order?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/work_orders/work_orders-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

Work_ordersView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_WORK_ORDERS'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default Work_ordersView;
