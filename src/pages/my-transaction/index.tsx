import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import Transaction from './transaction';
import SalesTransaction from './sales-transaction';
import AppLayout from '../../layouts/app-layout';

function MyTransaction() {
  return (
    <AppLayout>
        <Tabs defaultValue="transactions" className="w-full  container lg:px-24 lg:py-12 py-6">
          <TabsList className="border-b">
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <Transaction />
          </TabsContent>
          <TabsContent value="sales">
            <SalesTransaction />
          </TabsContent>
        </Tabs>
    </AppLayout>
  );
}

export default MyTransaction;
