'use client'
import { useState } from 'react'
import { data } from "@/data.js";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem } from "@/components/ui/pagination";
import VocabCard from './VocabCard';

const ItemsPerPage = 18;

const WordList = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = data.filter((item) => {
        const korean = item.Vocab ? String(item.Vocab) : "";
        const english = item["Vocab-English"] ? String(item["Vocab-English"]).toLowerCase() : "";
        const romanization = item["Vocab-Rom"] ? String(item["Vocab-Rom"]).toLowerCase() : "";

        return (
            search === "" ||
            korean.includes(search) ||
            english.includes(search.toLowerCase()) ||
            romanization.includes(search.toLowerCase())
        );
    });

    const totalPages = Math.ceil(filteredData.length / ItemsPerPage);
    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex = startIndex + ItemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return (
        <div>
            <Input 
                onChange={(e) => {
                    setSearch(e.target.value);
                    setCurrentPage(1); // Reset to first page on search change
                }} 
                className="w-48 h-9 my-4" 
                placeholder="Search..."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {paginatedData.map((item) => (
                    <VocabCard 
                        key={item.Order} 
                        vocab={item.Vocab} 
                        roman={item["Vocab-Rom"]} 
                        eng={item["Vocab-English"]} 
                    />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination className="mt-4 mb-8">
                    <PaginationContent>
                        <PaginationItem>
                            <Button 
                                variant="outline" 
                                disabled={currentPage == 1} 
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            >
                                Previous
                            </Button>
                        </PaginationItem>
                        <PaginationItem>
                            <span className="px-4">{currentPage} / {totalPages}</span>
                        </PaginationItem>
                        <PaginationItem>
                            <Button 
                                variant="outline" 
                                disabled={currentPage === totalPages} 
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            >
                                Next
                            </Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default WordList;
