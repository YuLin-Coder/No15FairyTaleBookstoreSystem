package com.li.commons;

import java.util.List;

public class DataGrid<T> {
	/** Total number of pages */
	private int total;
	/** The current page number */
	private int records;
	/** The actual data */
	private List<T> rows;

	public DataGrid(int total, int records, List<T> rows) {
		this.total = total;
		this.records = records;
		this.rows = rows;
	}
	
	public DataGrid(Page page, List<T> rows) {
		this.total = page.getTotalRow();
		this.records = page.getTotalPage();
		this.rows = rows;
	}

	public int getTotal() {
		return total;
	}


	public int getRecords() {
		return records;
	}

	public List<T> getRows() {
		return rows;
	}

	
	
}
