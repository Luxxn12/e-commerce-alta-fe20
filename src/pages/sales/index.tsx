import { Ellipsis } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import AppLayout from "../../layouts/app-layout";
// import { sampleProductCard } from "../../utils/apis/products/sample-data";
import { useEffect, useState } from "react";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "../../components/ui/pagination";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../../components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { IProduct } from "../../utils/apis/products/types";
import { useAuth } from "../../utils/apis/contexts/token";
import { getProduct } from "../../utils/apis/products/api";

export default function Sales() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage] = useState(10);
  const [data, setData] = useState<IProduct[]>([])
  const { addNotification } = useAuth()

  async function fetchData() {
    try {
      const response = await getProduct()
      setData(response.data)
    } catch (error: any) {
      addNotification(error.message, "error");
    } 
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const lastProductIndex = currentPage * productsPerPage - 1;
  // const firstProductIndex = Math.max(0, lastProductIndex - productsPerPage + 1);
  // const currentProducts = sampleProductCard.slice(firstProductIndex, lastProductIndex + 1);
  // const totalPages = Math.ceil(sampleProductCard.length / productsPerPage);

  // const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <AppLayout>
      <div className="w-full py-10 lg:px-28 px-6 md:px-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">All My Products</h1>
          <Link to="/my-product/add-product">
            <Button size="sm">Add Product</Button>
          </Link>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((product, index) => (
                <TableRow key={product.id}>
                  <TableCell>{index}</TableCell>
                  <TableCell className="font-medium">{product.product_name}</TableCell>
                  <TableCell>
                    <img
                      src={product.product_picture}
                      alt={product.product_name}
                      width={64}
                      height={64}
                      className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>Rp.{product.price}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <Ellipsis className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                          <Link to={`/my-product/${product.id}/edit`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <DropdownMenuItem >Delete</DropdownMenuItem>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your
                                account and remove your data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        <DropdownMenuItem asChild>
                          <Link to={`/my-product/${product.id}`}>
                            View Details
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {/* <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  // disabled={currentPage === 1}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={page === currentPage}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  // disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div> */}
      </div>
    </AppLayout>
  );
}
